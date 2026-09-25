import { promptsBatch1 } from './prompts_batch1';
import { promptsBatch2 } from './prompts_batch2';
import { promptsBatch3 } from './prompts_batch3';
import { promptsBatch4 } from './prompts_batch4';
import { promptsBatch5 } from './prompts_batch5';
import { Prompt } from '../lib/types';

export const prompts: Prompt[] = [
  ...promptsBatch1,
  ...promptsBatch2,
  ...promptsBatch3,
  ...promptsBatch4,
  ...promptsBatch5,
];
