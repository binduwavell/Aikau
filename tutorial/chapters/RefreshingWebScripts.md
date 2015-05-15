## Refreshing WebScripts

### Debug Mode
When running in "client-debug" mode (as your client is initially configured to do) it will only be necessary to refresh your WebScript files when ading an entirely new WebScript (e.g. if you're adding files that didn't exist when the server first started). There are a few occasions when you will be prompted to do this throughout the course of the tutorial.

##### Step 1
In your browser, open the page [http://localhost:8090/aikau-sample/service/index](http://localhost:8090/aikau-sample/service/index). You should see the following page:
![Screnshot showing the service index page](../resources/RefreshWebScripts.png "Screnshot of the service index page")
##### Step 2
Click the button marked "Refresh Web Scripts" to reload the existing WebScripts and load any new WebScripts that you might have added since the server started.

### Production Mode
When running in production mode it will be necessary to refresh your WebScripts if you make any changes to them in order to see the effect of those changes.

### Automating Refresh
It is possible to integrate the WebScript refreshing capability from the alfresco-maven-plugin. Following is a command you can run from the root of your project to refresh:

```
mvn org.alfresco.maven.plugin:alfresco-maven-plugin:2.1.0:refresh-share -Dmaven.alfresco.refresh.mode=share -Dmaven.alfresco.refresh.port=8090 -Dmaven.alfresco.refresh.username=admin -Dmaven.alfresco.refresh.password=admin -Dmaven.alfresco.refresh.shareUrl=/aikau-sample/page/index -Dmaven.alfresco.refresh.clearCacheShareUrl=/aikau-sample/page/caches/dependency/clear
```

Obviously this plugin:goal can be integrated into the pom so that ```mvn compile``` will automatically force a refresh.

