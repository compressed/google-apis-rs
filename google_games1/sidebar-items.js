initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["AchievementDefinition","This is a JSON template for an achievement definition object."],["AchievementDefinitionListCall","Lists all the achievement definitions for your application."],["AchievementDefinitionMethods","A builder providing access to all methods supported on *achievementDefinition* resources. It is not used directly, but through the `Games` hub."],["AchievementDefinitionsListResponse","This is a JSON template for a list of achievement definition objects."],["AchievementIncrementCall","Increments the steps of the achievement with the given ID for the currently authenticated player."],["AchievementIncrementResponse","This is a JSON template for an achievement increment response"],["AchievementListCall","Lists the progress for all your application's achievements for the currently authenticated player."],["AchievementMethods","A builder providing access to all methods supported on *achievement* resources. It is not used directly, but through the `Games` hub."],["AchievementRevealCall","Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player."],["AchievementRevealResponse","This is a JSON template for an achievement reveal response"],["AchievementSetStepsAtLeastCall","Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified."],["AchievementSetStepsAtLeastResponse","This is a JSON template for an achievement set steps at least response."],["AchievementUnlockCall","Unlocks this achievement for the currently authenticated player."],["AchievementUnlockResponse","This is a JSON template for an achievement unlock response"],["AchievementUpdateMultipleCall","Updates multiple achievements for the currently authenticated player."],["AchievementUpdateMultipleRequest","This is a JSON template for a list of achievement update requests."],["AchievementUpdateMultipleResponse","This is a JSON template for an achievement unlock response."],["AchievementUpdateRequest","This is a JSON template for a request to update an achievement."],["AchievementUpdateResponse","This is a JSON template for an achievement update response."],["AggregateStats","This is a JSON template for aggregate stats."],["AnonymousPlayer","This is a JSON template for an anonymous player"],["Application","This is a JSON template for the Application resource."],["ApplicationCategory","This is a JSON template for an application category object."],["ApplicationGetCall","Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data."],["ApplicationMethods","A builder providing access to all methods supported on *application* resources. It is not used directly, but through the `Games` hub."],["ApplicationPlayedCall","Indicate that the the currently authenticated user is playing your application."],["ApplicationVerifyCall","Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for."],["ApplicationVerifyResponse","This is a JSON template for a third party application verification response resource."],["Category","This is a JSON template for data related to individual game categories."],["CategoryListResponse","This is a JSON template for a list of category data objects."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["EventBatchRecordFailure","This is a JSON template for a batch update failure resource."],["EventChild","This is a JSON template for an event child relationship resource."],["EventDefinition","This is a JSON template for an event definition resource."],["EventDefinitionListResponse","This is a JSON template for a ListDefinitions response."],["EventListByPlayerCall","Returns a list showing the current progress on events in this application for the currently authenticated user."],["EventListDefinitionCall","Returns a list of the event definitions in this application."],["EventMethods","A builder providing access to all methods supported on *event* resources. It is not used directly, but through the `Games` hub."],["EventPeriodRange","This is a JSON template for an event period time range."],["EventPeriodUpdate","This is a JSON template for an event period update resource."],["EventRecordCall","Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application."],["EventRecordFailure","This is a JSON template for an event update failure resource."],["EventRecordRequest","This is a JSON template for an event period update resource."],["EventUpdateRequest","This is a JSON template for an event period update resource."],["EventUpdateResponse","This is a JSON template for an event period update resource."],["Games","Central instance to access all Games related resource activities"],["GamesAchievementIncrement","This is a JSON template for the payload to request to increment an achievement."],["GamesAchievementSetStepsAtLeast","This is a JSON template for the payload to request to increment an achievement."],["ImageAsset","This is a JSON template for an image asset object."],["Instance","This is a JSON template for the Instance resource."],["InstanceAndroidDetails","This is a JSON template for the Android instance details resource."],["InstanceIosDetails","This is a JSON template for the iOS details resource."],["InstanceWebDetails","This is a JSON template for the Web details resource."],["Leaderboard","This is a JSON template for the Leaderboard resource."],["LeaderboardEntry","This is a JSON template for the Leaderboard Entry resource."],["LeaderboardGetCall","Retrieves the metadata of the leaderboard with the given ID."],["LeaderboardListCall","Lists all the leaderboard metadata for your application."],["LeaderboardListResponse","This is a JSON template for a list of leaderboard objects."],["LeaderboardMethods","A builder providing access to all methods supported on *leaderboard* resources. It is not used directly, but through the `Games` hub."],["LeaderboardScoreRank","This is a JSON template for a score rank in a leaderboard."],["LeaderboardScores","This is a JSON template for a ListScores response."],["MetagameConfig","This is a JSON template for the metagame config resource"],["MetagameGetMetagameConfigCall","Return the metagame configuration data for the calling application."],["MetagameListCategoriesByPlayerCall","List play data aggregated per category for the player corresponding to playerId."],["MetagameMethods","A builder providing access to all methods supported on *metagame* resources. It is not used directly, but through the `Games` hub."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["NetworkDiagnostics","This is a JSON template for network diagnostics reported for a client."],["ParticipantResult","This is a JSON template for a result for a match participant."],["PeerChannelDiagnostics","This is a JSON template for peer channel diagnostics."],["PeerSessionDiagnostics","This is a JSON template for peer session diagnostics."],["Played","This is a JSON template for metadata about a player playing a game with the currently authenticated user."],["Player","This is a JSON template for a Player resource."],["PlayerAchievement","This is a JSON template for an achievement object."],["PlayerAchievementListResponse","This is a JSON template for a list of achievement objects."],["PlayerEvent","This is a JSON template for an event status resource."],["PlayerEventListResponse","This is a JSON template for a ListByPlayer response."],["PlayerExperienceInfo","This is a JSON template for 1P/3P metadata about the player's experience."],["PlayerGetCall","Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me."],["PlayerLeaderboardScore","This is a JSON template for a player leaderboard score object."],["PlayerLeaderboardScoreListResponse","This is a JSON template for a list of player leaderboard scores."],["PlayerLevel","This is a JSON template for 1P/3P metadata about a user's level."],["PlayerListCall","Get the collection of players for the currently authenticated user."],["PlayerListResponse","This is a JSON template for a third party player list response."],["PlayerMethods","A builder providing access to all methods supported on *player* resources. It is not used directly, but through the `Games` hub."],["PlayerName","An object representation of the individual components of the player's name. For some players, these fields may not be present."],["PlayerScore","This is a JSON template for a player score."],["PlayerScoreListResponse","This is a JSON template for a list of score submission statuses."],["PlayerScoreResponse","This is a JSON template for a list of leaderboard entry resources."],["PlayerScoreSubmissionList","This is a JSON template for a list of score submission requests"],["PushToken","This is a JSON template for a push token resource."],["PushTokenId","This is a JSON template for a push token ID resource."],["PushTokenIdIos","A push token ID for iOS devices."],["PushtokenMethods","A builder providing access to all methods supported on *pushtoken* resources. It is not used directly, but through the `Games` hub."],["PushtokenRemoveCall","Removes a push token for the current user and application. Removing a non-existent push token will report success."],["PushtokenUpdateCall","Registers a push token for the current user and application."],["Quest","This is a JSON template for a Quest resource."],["QuestAcceptCall","Indicates that the currently authorized user will participate in the quest."],["QuestContribution","This is a JSON template for a Quest Criterion Contribution resource."],["QuestCriterion","This is a JSON template for a Quest Criterion resource."],["QuestListCall","Get a list of quests for your application and the currently authenticated player."],["QuestListResponse","This is a JSON template for a list of quest objects."],["QuestMethods","A builder providing access to all methods supported on *quest* resources. It is not used directly, but through the `Games` hub."],["QuestMilestone","This is a JSON template for a Quest Milestone resource."],["QuestMilestoneClaimCall","Report that a reward for the milestone corresponding to milestoneId for the quest corresponding to questId has been claimed by the currently authorized user."],["QuestMilestoneMethods","A builder providing access to all methods supported on *questMilestone* resources. It is not used directly, but through the `Games` hub."],["RevisionCheckCall","Checks whether the games client is out of date."],["RevisionCheckResponse","This is a JSON template for the result of checking a revision."],["RevisionMethods","A builder providing access to all methods supported on *revision* resources. It is not used directly, but through the `Games` hub."],["Room","This is a JSON template for a room resource object."],["RoomAutoMatchStatus","This is a JSON template for status of room automatching that is in progress."],["RoomAutoMatchingCriteria","This is a JSON template for a room auto-match criteria object."],["RoomClientAddress","This is a JSON template for the client address when setting up a room."],["RoomCreateCall","Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomCreateRequest","This is a JSON template for a room creation request."],["RoomDeclineCall","Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomDismisCall","Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomGetCall","Get the data for a room."],["RoomJoinCall","Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomJoinRequest","This is a JSON template for a join room request."],["RoomLeaveCall","Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomLeaveDiagnostics","This is a JSON template for room leave diagnostics."],["RoomLeaveRequest","This is a JSON template for a leave room request."],["RoomList","This is a JSON template for a list of rooms."],["RoomListCall","Returns invitations to join rooms."],["RoomMethods","A builder providing access to all methods supported on *room* resources. It is not used directly, but through the `Games` hub."],["RoomModification","This is a JSON template for room modification metadata."],["RoomP2PStatus","This is a JSON template for an update on the status of a peer in a room."],["RoomP2PStatuses","This is a JSON template for an update on the status of peers in a room."],["RoomParticipant","This is a JSON template for a participant in a room."],["RoomReportStatuCall","Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported."],["RoomStatus","This is a JSON template for the status of a room that the player has joined."],["ScoreGetCall","Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span. NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'."],["ScoreListCall","Lists the scores in a leaderboard, starting from the top."],["ScoreListWindowCall","Lists the scores in a leaderboard around (and including) a player's score."],["ScoreMethods","A builder providing access to all methods supported on *score* resources. It is not used directly, but through the `Games` hub."],["ScoreSubmission","This is a JSON template for a request to submit a score to leaderboards."],["ScoreSubmitCall","Submits a score to the specified leaderboard."],["ScoreSubmitMultipleCall","Submits multiple scores to leaderboards."],["Snapshot","This is a JSON template for an snapshot object."],["SnapshotGetCall","Retrieves the metadata for a given snapshot ID."],["SnapshotImage","This is a JSON template for an image of a snapshot."],["SnapshotListCall","Retrieves a list of snapshots created by your application for the player corresponding to the player ID."],["SnapshotListResponse","This is a JSON template for a list of snapshot objects."],["SnapshotMethods","A builder providing access to all methods supported on *snapshot* resources. It is not used directly, but through the `Games` hub."],["TurnBasedAutoMatchingCriteria","This is a JSON template for an turn-based auto-match criteria object."],["TurnBasedMatch","This is a JSON template for a turn-based match resource object."],["TurnBasedMatchCreateRequest","This is a JSON template for a turn-based match creation request."],["TurnBasedMatchData","This is a JSON template for a turn-based match data object."],["TurnBasedMatchDataRequest","This is a JSON template for sending a turn-based match data object."],["TurnBasedMatchList","This is a JSON template for a list of turn-based matches."],["TurnBasedMatchModification","This is a JSON template for turn-based match modification metadata."],["TurnBasedMatchParticipant","This is a JSON template for a participant in a turn-based match."],["TurnBasedMatchRematch","This is a JSON template for a rematch response."],["TurnBasedMatchResults","This is a JSON template for a turn-based match results object."],["TurnBasedMatchSync","This is a JSON template for a list of turn-based matches returned from a sync."],["TurnBasedMatchTurn","This is a JSON template for the object representing a turn."],["TurnBasedMatcheCancelCall","Cancel a turn-based match."],["TurnBasedMatcheCreateCall","Create a turn-based match."],["TurnBasedMatcheDeclineCall","Decline an invitation to play a turn-based match."],["TurnBasedMatcheDismisCall","Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications."],["TurnBasedMatcheFinishCall","Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state."],["TurnBasedMatcheGetCall","Get the data for a turn-based match."],["TurnBasedMatcheJoinCall","Join a turn-based match."],["TurnBasedMatcheLeaveCall","Leave a turn-based match when it is not the current player's turn, without canceling the match."],["TurnBasedMatcheLeaveTurnCall","Leave a turn-based match during the current player's turn, without canceling the match."],["TurnBasedMatcheListCall","Returns turn-based matches the player is or was involved in."],["TurnBasedMatcheMethods","A builder providing access to all methods supported on *turnBasedMatche* resources. It is not used directly, but through the `Games` hub."],["TurnBasedMatcheRematchCall","Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn."],["TurnBasedMatcheSyncCall","Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED."],["TurnBasedMatcheTakeTurnCall","Commit the results of a player turn."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"type":[["Result","A universal result type used as return for all calls."]]});