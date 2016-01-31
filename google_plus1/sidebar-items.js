initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Acl","There is no detailed description."],["Activity","There is no detailed description."],["ActivityActor","The person who performed this activity."],["ActivityActorClientSpecificActorInfo","Actor info specific to particular clients."],["ActivityActorClientSpecificActorInfoYoutubeActorInfo","Actor info specific to YouTube clients."],["ActivityActorImage","The image representation of the actor."],["ActivityActorName","An object representation of the individual components of name."],["ActivityActorVerification","Verification status of actor."],["ActivityFeed","There is no detailed description."],["ActivityGetCall","Get an activity."],["ActivityListCall","List all of the activities in the specified collection for a particular user."],["ActivityMethods","A builder providing access to all methods supported on *activity* resources. It is not used directly, but through the `Plus` hub."],["ActivityObject","The object of this activity."],["ActivityObjectActor","If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor."],["ActivityObjectActorClientSpecificActorInfo","Actor info specific to particular clients."],["ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo","Actor info specific to YouTube clients."],["ActivityObjectActorImage","The image representation of the original actor."],["ActivityObjectActorVerification","Verification status of actor."],["ActivityObjectAttachments","The media objects attached to this activity."],["ActivityObjectAttachmentsEmbed","If the attachment is a video, the embeddable link."],["ActivityObjectAttachmentsFullImage","The full image URL for photo attachments."],["ActivityObjectAttachmentsImage","The preview image for photos or videos."],["ActivityObjectAttachmentsThumbnails","If the attachment is an album, this property is a list of potential additional thumbnails from the album."],["ActivityObjectAttachmentsThumbnailsImage","Image resource."],["ActivityObjectPlusoners","People who +1'd this activity."],["ActivityObjectReplies","Comments in reply to this activity."],["ActivityObjectResharers","People who reshared this activity."],["ActivityProvider","The service provider that initially published this activity."],["ActivitySearchCall","Search public activities."],["Comment","There is no detailed description."],["CommentActor","The person who posted this comment."],["CommentActorClientSpecificActorInfo","Actor info specific to particular clients."],["CommentActorClientSpecificActorInfoYoutubeActorInfo","Actor info specific to YouTube clients."],["CommentActorImage","The image representation of this actor."],["CommentActorVerification","Verification status of actor."],["CommentFeed","There is no detailed description."],["CommentGetCall","Get a comment."],["CommentInReplyTo","The activity this comment replied to."],["CommentListCall","List all of the comments for an activity."],["CommentMethods","A builder providing access to all methods supported on *comment* resources. It is not used directly, but through the `Plus` hub."],["CommentObject","The object of this comment."],["CommentPlusoners","People who +1'd this comment."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["PeopleFeed","There is no detailed description."],["PeopleGetCall","Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language."],["PeopleListByActivityCall","List all of the people in the specified collection for a particular activity."],["PeopleListCall","List all of the people in the specified collection."],["PeopleMethods","A builder providing access to all methods supported on *people* resources. It is not used directly, but through the `Plus` hub."],["PeopleSearchCall","Search all public profiles."],["Person","There is no detailed description."],["PersonAgeRange","The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning."],["PersonCover","The cover photo content."],["PersonCoverCoverInfo","Extra information about the cover photo."],["PersonCoverCoverPhoto","The person's primary cover image."],["PersonEmails","A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address."],["PersonImage","The representation of the person's profile photo."],["PersonName","An object representation of the individual components of a person's name."],["PersonOrganizations","A list of current or past organizations with which this person is associated."],["PersonPlacesLived","A list of places where this person has lived."],["PersonUrls","A list of URLs for this person."],["Place","There is no detailed description."],["PlaceAddress","The physical address of the place."],["PlacePosition","The position of the place."],["Plus","Central instance to access all Plus related resource activities"],["PlusAclentryResource","There is no detailed description."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"type":[["Result","A universal result type used as return for all calls."]]});