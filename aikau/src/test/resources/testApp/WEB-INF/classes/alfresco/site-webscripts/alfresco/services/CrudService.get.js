model.jsonModel = {
   services: [
      {
         name: "alfresco/services/LoggingService",
         config: {
            loggingPreferences: {
               enabled: true,
               all: true,
               warn: true,
               error: true
            }
         }
      },
      "alfresco/services/CrudService",
      "alfresco/services/NotificationService",
      "alfresco/services/DialogService"
   ],
   widgets:[
      {
         name: "alfresco/buttons/AlfButton",
         id: "DELETE_SUCCESS_BUTTON",
         config: {
            label: "Successful delete call",
            publishTopic: "ALF_CRUD_DELETE",
            publishPayload: {
               url: "resources/123",
               responseTopic: "ALF_CRUD_DELETED"
            }
         }
      },
      {
         name: "alfresco/buttons/AlfButton",
         id: "DELETE_FAILURE_BUTTON",
         config: {
            label: "Failed delete call",
            publishTopic: "ALF_CRUD_DELETE",
            publishPayload: {
               url: "resources/234",
               responseTopic: "ALF_CRUD_DELETED",
               failureMessage: "Test delete-failure message"
            }
         }
      },
      {
         name: "alfresco/buttons/AlfButton",
         id: "UPDATE_SUCCESS_BUTTON",
         config: {
            label: "Successful update call",
            publishTopic: "ALF_CRUD_UPDATE",
            publishPayload: {
               url: "resources/123",
               alfResponseTopic: "ALF_CRUD_UPDATED"
            }
         }
      },
      {
         name: "alfresco/buttons/AlfButton",
         id: "UPDATE_FAILURE_BUTTON",
         config: {
            label: "Failed update call",
            publishTopic: "ALF_CRUD_UPDATE",
            publishPayload: {
               url: "resources/234",
               alfResponseTopic: "ALF_CRUD_UPDATED",
               failureMessage: "Test update-failure message"
            }
         }
      },
      {
         name: "alfresco/buttons/AlfButton",
         id: "CREATE_SUCCESS_BUTTON",
         config: {
            label: "Successful create call",
            publishTopic: "ALF_CRUD_CREATE",
            publishPayload: {
               url: "resources/123",
               alfResponseTopic: "ALF_CRUD_CREATED"
            }
         }
      },
      {
         name: "alfresco/buttons/AlfButton",
         id: "CREATE_FAILURE_BUTTON",
         config: {
            label: "Failed create call",
            publishTopic: "ALF_CRUD_CREATE",
            publishPayload: {
               url: "resources/234",
               alfResponseTopic: "ALF_CRUD_CREATED",
               failureMessage: "Test create-failure message"
            }
         }
      },
      {
         name: "aikauTesting/mockservices/CrudServiceMockXhr"
      },
      {
         name: "alfresco/logging/SubscriptionLog"
      },
      {
         name: "aikauTesting/TestCoverageResults"
      }
   ]
};