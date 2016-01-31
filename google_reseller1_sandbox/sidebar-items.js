initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Address","JSON template for address of a customer."],["ChangePlanRequest","JSON template for the ChangePlan rpc request."],["Customer","JSON template for a customer."],["CustomerGetCall","Gets a customer resource if one exists and is owned by the reseller."],["CustomerInsertCall","Creates a customer resource if one does not already exist."],["CustomerMethods","A builder providing access to all methods supported on *customer* resources. It is not used directly, but through the `Reseller` hub."],["CustomerPatchCall","Update a customer resource if one it exists and is owned by the reseller. This method supports patch semantics."],["CustomerUpdateCall","Update a customer resource if one it exists and is owned by the reseller."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["RenewalSettings","JSON template for a subscription renewal settings."],["Reseller","Central instance to access all Reseller related resource activities"],["Seats","JSON template for subscription seats."],["Subscription","JSON template for a subscription."],["SubscriptionActivateCall","Activates a subscription previously suspended by the reseller"],["SubscriptionChangePlanCall","Changes the plan of a subscription"],["SubscriptionChangeRenewalSettingCall","Changes the renewal settings of a subscription"],["SubscriptionChangeSeatCall","Changes the seats configuration of a subscription"],["SubscriptionDeleteCall","Cancels/Downgrades a subscription."],["SubscriptionGetCall","Gets a subscription of the customer."],["SubscriptionInsertCall","Creates/Transfers a subscription for the customer."],["SubscriptionListCall","Lists subscriptions of a reseller, optionally filtered by a customer name prefix."],["SubscriptionMethods","A builder providing access to all methods supported on *subscription* resources. It is not used directly, but through the `Reseller` hub."],["SubscriptionPlan","Plan details of the subscription"],["SubscriptionPlanCommitmentInterval","Interval of the commitment if it is a commitment plan."],["SubscriptionStartPaidServiceCall","Starts paid service of a trial subscription"],["SubscriptionSuspendCall","Suspends an active subscription"],["SubscriptionTransferInfo","Transfer related information for the subscription."],["SubscriptionTrialSettings","Trial Settings of the subscription."],["Subscriptions","JSON template for a subscription list."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"type":[["Result","A universal result type used as return for all calls."]]});