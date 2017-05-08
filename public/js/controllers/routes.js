'use strict';

page('/', window.aboutController.index);
page('/projects', window.projectController.index);
page('/music', window.musicController.index);
page('/repos', window.reposController.index);
page();
