export interface OpenAiCompletionResponse {
  id: string
  object: string
  created: number
  model: string
  choices: Choice[]
  usage: Usage
}

export interface Choice {
  text: string
  index: number
  logprobs: any
  finish_reason: string
}

export interface Usage {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
}