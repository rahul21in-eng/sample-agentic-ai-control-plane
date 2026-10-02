#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { AgenticAiPlatformPipelineStack } from "../lib/pipeline-stack";
import { createPlatformStacks } from "../lib/platform";

const app = new cdk.App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

// Option A: Self-mutating CDK Pipeline (CodeCommit source — requires CodeCommit access).
// new AgenticAiPlatformPipelineStack(app, "AgenticAiPlatformPipelineStack", { env });

// Option B: Direct deploy — all platform stacks deployed straight from local CDK.
createPlatformStacks(app, env);

app.synth();
