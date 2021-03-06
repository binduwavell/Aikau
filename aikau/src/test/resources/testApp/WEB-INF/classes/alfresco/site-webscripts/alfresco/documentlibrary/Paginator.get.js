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
      {
         name: "aikauTesting/mockservices/PaginationService",
         config: {
            loadDataSubscriptionTopic: "ALF_RETRIEVE_DOCUMENTS_REQUEST"
         }
      },
      "alfresco/services/NavigationService"
   ],
   widgets: [
      {
         name: "alfresco/layout/HorizontalWidgets",
         config: {
            widgets: [
               {
                  id: "DEFAULT_CONFIG",
                  name: "alfresco/layout/ClassicWindow",
                  config: {
                     title: "Default page settings",
                     widgets: [
                        {
                           id: "MENU_BAR",
                           name: "alfresco/menus/AlfMenuBar",
                           config: {
                              widgets: [
                                 {
                                    id: "PAGINATOR",
                                    name: "alfresco/lists/Paginator",
                                    config: {
                                       hidePageSizeOnWidth: 100
                                    }
                                 },
                                 {
                                    id: "MENU_BAR_POPUP",
                                    name: "alfresco/menus/AlfMenuBarPopup",
                                    config: {
                                       label: "Popup",
                                       widgets: [
                                          {
                                             name: "alfresco/lists/ResultsPerPageGroup"
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        },
                        {
                           id: "LIST",
                           name: "alfresco/lists/AlfSortablePaginatedList",
                           config: {
                              useHash: false,
                              widgets: [
                                 {
                                    name: "alfresco/lists/views/AlfListView",
                                    config: {
                                       widgets: [
                                          {
                                             name: "alfresco/lists/views/layouts/Row",
                                             config: {
                                                widgets: [
                                                   {
                                                      name: "alfresco/lists/views/layouts/Cell",
                                                      config: {
                                                         widgets: [
                                                            {
                                                               name: "alfresco/renderers/Property",
                                                               config: {
                                                                  propertyToRender: "index"
                                                               }
                                                            }
                                                         ]
                                                      }
                                                   }
                                                ]
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               },
               {
                  name: "alfresco/layout/VerticalWidgets",
                  config: {
                     widgets: [
                        {
                           name: "alfresco/layout/LeftAndRight",
                           config: {
                              widgets: [
                                 {
                                    id: "CHANGE_FILTER",
                                    name: "alfresco/buttons/AlfButton",
                                    config: {
                                       label: "Change Filter",
                                       pubSubScope: "CUSTOM_",
                                       publishTopic: "ALF_DOCLIST_FILTER_SELECTION",
                                       publishPayload: {
                                          value: "myfilter"
                                       }
                                    }
                                 },
                                 {
                                    id: "CHANGE_PATH",
                                    name: "alfresco/buttons/AlfButton",
                                    config: {
                                       label: "Change Path",
                                       pubSubScope: "CUSTOM_",
                                       publishTopic: "ALF_DOCUMENTLIST_PATH_CHANGED",
                                       publishPayload: {
                                          path: "mypath"
                                       }
                                    }
                                 },
                                 {
                                    id: "CHANGE_TAG",
                                    name: "alfresco/buttons/AlfButton",
                                    config: {
                                       label: "Change Tag",
                                       pubSubScope: "CUSTOM_",
                                       publishTopic: "ALF_DOCUMENTLIST_TAG_CHANGED",
                                       publishPayload: {
                                          value: "mytag"
                                       }
                                    }
                                 },
                                 {
                                    id: "CHANGE_CATEGORY",
                                    name: "alfresco/buttons/AlfButton",
                                    config: {
                                       label: "Change Category",
                                       pubSubScope: "CUSTOM_",
                                       publishTopic: "ALF_DOCUMENTLIST_CATEGORY_CHANGED",
                                       publishPayload: {
                                          path: "mycategory"
                                       }
                                    }
                                 }
                              ]
                           }
                        },
                        {
                           id: "CUSTOM_PAGE_SIZES",
                           name: "alfresco/layout/ClassicWindow",
                           config: {
                              title: "Custom page sizes",
                              pubSubScope: "CUSTOM_",
                              widgets: [
                                 {
                                    id: "MENU_BAR",
                                    name: "alfresco/menus/AlfMenuBar",
                                    config: {
                                       widgets: [
                                          {
                                             id: "CUSTOM_PAGE_SIZE_PAGINATOR",
                                             name: "alfresco/lists/Paginator",
                                             config: {
                                                useHash: false,
                                                documentsPerPage: 10,
                                                hidePageSizeOnWidth: 100,
                                                pageSizes: [5,10,20]
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    id: "LIST",
                                    name: "alfresco/documentlibrary/AlfDocumentList",
                                    config: {
                                       useHash: false,
                                       currentPageSize: 10,
                                       hashVarsForUpdate: [
                                          "path",
                                          "filter",
                                          "tag",
                                          "category"
                                       ],
                                       widgets: [
                                          {
                                             name: "alfresco/lists/views/AlfListView",
                                             config: {
                                                widgets: [
                                                   {
                                                      name: "alfresco/lists/views/layouts/Row",
                                                      config: {
                                                         widgets: [
                                                            {
                                                               name: "alfresco/lists/views/layouts/Cell",
                                                               config: {
                                                                  widgets: [
                                                                     {
                                                                        name: "alfresco/renderers/Property",
                                                                        config: {
                                                                           propertyToRender: "index"
                                                                        }
                                                                     }
                                                                  ]
                                                               }
                                                            }
                                                         ]
                                                      }
                                                   }
                                                ]
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        },
                        {
                           name: "alfresco/layout/LeftAndRight",
                           config: {
                              widgets: [
                                 {
                                    id: "HASH_CHANGE_FILTER",
                                    name: "alfresco/buttons/AlfButton",
                                    config: {
                                       label: "Change Filter",
                                       pubSubScope: "HASH_CUSTOM_",
                                       publishTopic: "ALF_DOCLIST_FILTER_SELECTION",
                                       publishPayload: {
                                          value: "myfilter"
                                       }
                                    }
                                 },
                                 {
                                    id: "HASH_CHANGE_PATH",
                                    name: "alfresco/buttons/AlfButton",
                                    config: {
                                       label: "Change Path",
                                       pubSubScope: "HASH_CUSTOM_",
                                       publishTopic: "ALF_DOCUMENTLIST_PATH_CHANGED",
                                       publishPayload: {
                                          path: "mypath"
                                       }
                                    }
                                 },
                                 {
                                    id: "HASH_CHANGE_TAG",
                                    name: "alfresco/buttons/AlfButton",
                                    config: {
                                       label: "Change Tag",
                                       pubSubScope: "HASH_CUSTOM_",
                                       publishTopic: "ALF_DOCUMENTLIST_TAG_CHANGED",
                                       publishPayload: {
                                          value: "mytag"
                                       }
                                    }
                                 },
                                 {
                                    id: "HASH_CHANGE_CATEGORY",
                                    name: "alfresco/buttons/AlfButton",
                                    config: {
                                       label: "Change Category",
                                       pubSubScope: "HASH_CUSTOM_",
                                       publishTopic: "ALF_DOCUMENTLIST_CATEGORY_CHANGED",
                                       publishPayload: {
                                          path: "mycategory"
                                       }
                                    }
                                 }
                              ]
                           }
                        },
                        {
                           id: "HASH_CUSTOM_PAGE_SIZES",
                           name: "alfresco/layout/ClassicWindow",
                           config: {
                              title: "Custom page sizes",
                              pubSubScope: "HASH_CUSTOM_",
                              widgets: [
                                 {
                                    id: "HASH_MENU_BAR",
                                    name: "alfresco/menus/AlfMenuBar",
                                    config: {
                                       widgets: [
                                          {
                                             id: "HASH_CUSTOM_PAGE_SIZE_PAGINATOR",
                                             name: "alfresco/lists/Paginator",
                                             config: {
                                                useHash: false,
                                                documentsPerPage: 10,
                                                hidePageSizeOnWidth: 100,
                                                pageSizes: [5,10,20]
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    id: "HASH_LIST",
                                    name: "alfresco/documentlibrary/AlfDocumentList",
                                    config: {
                                       useHash: true,
                                       currentPageSize: 10,
                                       hashVarsForUpdate: [
                                          "path",
                                          "filter",
                                          "tag",
                                          "category"
                                       ],
                                       widgets: [
                                          {
                                             name: "alfresco/lists/views/AlfListView",
                                             config: {
                                                widgets: [
                                                   {
                                                      name: "alfresco/lists/views/layouts/Row",
                                                      config: {
                                                         widgets: [
                                                            {
                                                               name: "alfresco/lists/views/layouts/Cell",
                                                               config: {
                                                                  widgets: [
                                                                     {
                                                                        name: "alfresco/renderers/Property",
                                                                        config: {
                                                                           propertyToRender: "index"
                                                                        }
                                                                     }
                                                                  ]
                                                               }
                                                            }
                                                         ]
                                                      }
                                                   }
                                                ]
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                  ]
               }
            }]
         }
      },
      {
         name: "alfresco/logging/SubscriptionLog",
         config: {
            topicsToIgnore: [
               "ALF_RETRIEVE_DOCUMENTS_REQUEST_SUCCESS",
               "ALF_DOCLIST_DOCUMENTS_LOADED"
            ]
         }
      }
   ]
};