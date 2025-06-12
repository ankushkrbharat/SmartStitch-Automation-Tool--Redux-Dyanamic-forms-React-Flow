// types.ts (optional for strong typing)
export type StepType = 'trigger' | 'action' | 'condition';

export interface ServiceDefinition {
  type: StepType;
  service: string;
  label: string;
  fields: string[];
}
