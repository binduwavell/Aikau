/**
 * Copyright (C) 2005-2015 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 *
 * @module alfresco/renderers/actions/UploadNewVersion
 * @author Dave Draper
 */
define(["service/constants/Default"],
       function(AlfConstants) {
   return  {
      label: "Upload New Version", // TODO: Localization
      //icon: TODO
      publishTopic: "ALF_SHOW_UPLOADER",
      publishPayloadType: "CURRENT_ITEM", // TODO: Need to make sure this is correct
      publishPayload: {
         
      },
      type: "javascript",
      renderFilterMethod: "ALL",
      renderFilters: [
         // Replacing: evaluator.doclib.action.upload
         // TODO: Browser user-agent filter to only render for browsers that support upload

         // Replacing: evaluator.doclib.action.editableByCurrentUser
         {
            // Any of the following can be true:
            // 1) Node is NOT locked and is NOT the workingCopy and does NOT have a cm:locktype property set to "NODE_LOCK"
            // 2) The node is locked BUT the lock owner is the current user
            // 3) The node is a working copy BUT the working copy owner is the current user
            renderFilterMethod: "ANY",
            renderFilters: [
               {
                  renderFilterMethod: "ALL",
                  renderFilter: [
                     {
                        property: "node.isLocked",
                        values: [false]
                     },
                     {
                        property: "node.isWorkingCopy",
                        values: [false]
                     },
                     {
                        property: "node.properties.cm:lockType",
                        values: ["NODE_LOCK"],
                        negate: true
                     }
                  ]
               },
               {
                  renderFilterMethod: "ALL",
                  renderFilter: [
                     {
                        property: "node.isLocked",
                        values: [true]
                     },
                     {
                        property: "node.properties.cm:lockOwner",
                        values: [AlfConstants.USERNAME]
                     } 
                  ]
               },
               {
                  renderFilterMethod: "ALL",
                  renderFilter: [  
                     {
                        property: "node.isWorkingCopy",
                        values: [true]
                     },
                     {
                        property: "node.properties.cm:workingCopyOwner",
                        values: [AlfConstants.USERNAME]
                     }
                  ]
               }
            ]
         },

         // Replacing: evaluator.doclib.metadata.isLocked
         // Any of the following can be true:
         // 1) The node has a cm:workingcopy aspect BUT the current user is the owner of the working copy
         // 2) The node has a trx:transferred aspect BUT the current user
         {
            renderFilterMethod: "ANY",
            renderFilters: [
               {
                  renderFilterMethod: "ALL",
                  renderFilter: [
                     {
                        property: "node.aspects",
                        contains: ["cm:workingcopy"]
                     },
                     {
                        property: "node.cm:workingCopyOwner",
                        values: [AlfConstants.USERNAME]
                     }
                  ]
               },
               // TODO: Figure out these rules, the share-documentlibrary-config doesn't make sense !!!
               // ,
               // {
               //    renderFilterMethod: "ALL",
               //    renderFilter: [
               //       {
               //          property: "node.aspects",
               //          contains: ["trx:transferred"]
               //       },
               //       {
               //          property: "node.isLocked",
               //          values: [true]
               //       },
               //       {
               //          property: "node.properties.cm:lockOwner",
               //          values: [AlfConstants.USERNAME]
               //       } 
               //    ]
               // },
               {
                  renderFilterMethod: "ALL",
                  renderFilter: [
                     {
                        property: "node.aspects",
                        contains: ["cm:workingcopy","trx:transferred"],
                        negate: true
                     },
                     {
                        property: "node.cm:lockOwner",
                        values: [AlfConstants.USERNAME]
                     }
                  ]
               }
            ]
         }
      ]
   };
});