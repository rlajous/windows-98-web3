"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Fuul, ProjectInfo } from "fuul-sdk";

interface FuulContextValue {
  projectInfo: ProjectInfo | null;
  isLoading: boolean;
  error: Error | null;
}

const FuulContext = createContext<FuulContextValue | undefined>(undefined);

export const FuulProvider = ({ children }: { children: React.ReactNode }) => {
  const [projectInfo, setProjectInfo] = useState<ProjectInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initializeFuul = async () => {
      const fuul = new Fuul();
      try {
        await fuul.init("your-api-key");
        setProjectInfo(fuul.projectInfo);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeFuul();
  }, []);

  return (
    <FuulContext.Provider value={{ projectInfo, isLoading, error }}>
      {children}
    </FuulContext.Provider>
  );
};

export const useFuul = () => {
  const context = useContext(FuulContext);
  if (context === undefined) {
    throw new Error("useFuul must be used within a FuulProvider");
  }
  return context;
};
