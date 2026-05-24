export type TabParamList = {
  Home: undefined;
  Leads: undefined;
  Escalations: undefined;
  FollowUps: undefined;
};

export type RootStackParamList = {
  Tabs: undefined;
  ConversationDetail: { leadId: string };
};
