window.onload = function() {
  const views = document.getElementsByClassName("view");
  const createPostBtn = document.getElementById("create-post-btn");
  const createPostForm = document.getElementById("create-post-form");

  // Display landing page with specified CSS id.
  showView("view-landing");

  // Handle key milestones in user journey.
  createPostBtn.addEventListener("click", handleClickCreatePostBtn);
  createPostForm.addEventListener("submit", handleSubmitCreatePostForm);

  // Add handlers for KLM operators.
  document.addEventListener("click", loggingjs.logEvent);


  // Helper functions.

  function hideViews() {
    for (var i=0; i<views.length; i++) {
      views[i].classList.remove("active");
    }
  }

  function showView(id) {
    const view = document.getElementById(id);
    hideViews();
    view.classList.add("active");
  }

  function handleClickCreatePostBtn() {
    showView("view-create-post");

    // Log current timestamp to start timing trial.
    loggingjs.logEvent(null, 'startTrial', {
      eventName: 'startTrial',
      info: {'timestamp': (new Date()).toString(), 'millis': Date.now()}
    });

  }

  function handleSubmitCreatePostForm(event) {
    event.preventDefault();
    showView("view-post-created");

    // Log current timestamp to end trial.
    loggingjs.logEvent(null, 'endTrial', {
      eventName: 'endTrial',
      info: {'timestamp': (new Date()).toString(), 'millis': Date.now()}
    });
  }

}


