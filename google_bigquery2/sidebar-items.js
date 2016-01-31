initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Bigquery","Central instance to access all Bigquery related resource activities"],["CsvOptions","There is no detailed description."],["Dataset","There is no detailed description."],["DatasetAccess","[Optional] An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER;"],["DatasetDeleteCall","Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name."],["DatasetGetCall","Returns the dataset specified by datasetID."],["DatasetInsertCall","Creates a new empty dataset."],["DatasetList","There is no detailed description."],["DatasetListCall","Lists all datasets in the specified project to which you have been granted the READER dataset role."],["DatasetListDatasets","An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project."],["DatasetMethods","A builder providing access to all methods supported on *dataset* resources. It is not used directly, but through the `Bigquery` hub."],["DatasetPatchCall","Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics."],["DatasetReference","There is no detailed description."],["DatasetUpdateCall","Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["ErrorProto","There is no detailed description."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["ExplainQueryStage","There is no detailed description."],["ExplainQueryStep","There is no detailed description."],["ExternalDataConfiguration","There is no detailed description."],["GetQueryResultsResponse","There is no detailed description."],["Job","There is no detailed description."],["JobCancelCall","Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs."],["JobCancelResponse","There is no detailed description."],["JobConfiguration","There is no detailed description."],["JobConfigurationExtract","There is no detailed description."],["JobConfigurationLoad","There is no detailed description."],["JobConfigurationQuery","There is no detailed description."],["JobConfigurationTableCopy","There is no detailed description."],["JobGetCall","Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role."],["JobGetQueryResultCall","Retrieves the results of a query job."],["JobInsertCall","Starts a new asynchronous job. Requires the Can View project role."],["JobList","There is no detailed description."],["JobListCall","Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property."],["JobListJobs","List of jobs that were requested."],["JobMethods","A builder providing access to all methods supported on *job* resources. It is not used directly, but through the `Bigquery` hub."],["JobQueryCall","Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout."],["JobReference","There is no detailed description."],["JobStatistics","There is no detailed description."],["JobStatistics2","There is no detailed description."],["JobStatistics3","There is no detailed description."],["JobStatistics4","There is no detailed description."],["JobStatus","There is no detailed description."],["JsonObject","Represents a single JSON object."],["JsonValue","There is no detailed description."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["ProjectList","There is no detailed description."],["ProjectListCall","Lists all projects to which you have been granted any project role."],["ProjectListProjects","Projects to which you have at least READ access."],["ProjectMethods","A builder providing access to all methods supported on *project* resources. It is not used directly, but through the `Bigquery` hub."],["ProjectReference","There is no detailed description."],["QueryRequest","There is no detailed description."],["QueryResponse","There is no detailed description."],["Streamingbuffer","There is no detailed description."],["Table","There is no detailed description."],["TableCell","There is no detailed description."],["TableDataInsertAllRequest","There is no detailed description."],["TableDataInsertAllRequestRows","The rows to insert."],["TableDataInsertAllResponse","There is no detailed description."],["TableDataInsertAllResponseInsertErrors","An array of errors for rows that were not inserted."],["TableDataList","There is no detailed description."],["TableDeleteCall","Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted."],["TableFieldSchema","There is no detailed description."],["TableGetCall","Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table."],["TableInsertCall","Creates a new, empty table in the dataset."],["TableList","There is no detailed description."],["TableListCall","Lists all tables in the specified dataset. Requires the READER dataset role."],["TableListTables","Tables in the requested dataset."],["TableMethods","A builder providing access to all methods supported on *table* resources. It is not used directly, but through the `Bigquery` hub."],["TablePatchCall","Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics."],["TableReference","There is no detailed description."],["TableRow","There is no detailed description."],["TableSchema","There is no detailed description."],["TableUpdateCall","Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource."],["TabledataInsertAllCall","Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role."],["TabledataListCall","Retrieves table data from a specified set of rows. Requires the READER dataset role."],["TabledataMethods","A builder providing access to all methods supported on *tabledata* resources. It is not used directly, but through the `Bigquery` hub."],["UserDefinedFunctionResource","There is no detailed description."],["ViewDefinition","There is no detailed description."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"type":[["Result","A universal result type used as return for all calls."]]});