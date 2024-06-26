export interface ConversationEvent {
    id: string
    timestamp: string
    conversationId: string
    sender: string
    event: EventMessage
    disableTyping: boolean
}

export interface EventMessage {
	message?: string
	innerDialog?: string
    actionRequested?: string
	actionResult?: string
}

export interface Conversation {
    id: string
    timestamp: string
    agent: string
    events: ConversationEvent[]
}

export interface Agent {
    id: string
    name: string
    timestamp: string
    handlerLambda: string
    systemPrompt: string
    actions: Action[]
}

export interface LLm {
    id: string
    name: string
    model: string
}

export interface Action {
    id: string
    type: string,
    name: string,
    resource: string
}

export interface ConversationMetadata {
    conversationId: string
    agentStartResponding?: boolean
    agentStopResponding?: boolean
    agentPartialMessage?: string
}

export interface ConversationMetadataState {
    partialMessage: string
    responding: boolean
}