model.jsonModel = {
   services: [
      {
         name: "alfresco/services/LoggingService",
         config: {
            loggingPreferences: {
               enabled: true,
               all: true
            }
         }
      }
   ],
   widgets:[
      {
         name: "alfresco/renderers/Actions",
         config: {
            currentItem: {
               node: {
                  nodeRef: "some://dummy/node",
                  isLocked: false,
                  isWorkingCopy: false,
                  properties: {
                     "cm:lockOwner": "bob",
                     "cm:workingCopyOwner": "bob"
                  }
               }
            }
            // ,
            // widgetsForActions: [
            // ]
         }
      },
      {
         name: "alfresco/logging/DebugLog"
      }
   ]
};