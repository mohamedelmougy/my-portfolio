"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

const ProgressSkills = ({ percentage }: { percentage: number }) => {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-full" />;
};

export default ProgressSkills;
