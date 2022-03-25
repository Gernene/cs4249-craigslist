window.onload = function() {
  const views = document.getElementsByClassName("view");
  const createPostBtn = document.getElementById("create-post-btn");
  const createPostForm = document.getElementById("create-post-form");
  const form01 = document.getElementById("form01");
  const form02 = document.getElementById("form02");

  // Display landing page with specified CSS id.
  showView("view-landing");

  // Handle key milestones in user journey.
  createPostBtn.addEventListener("click", handleClickCreatePostBtn);
  createPostForm.addEventListener("submit", handleSubmitCreatePostForm);
  form01.addEventListener("submit", handleSubmitForm01);
  form02.addEventListener("submit", handleSubmitForm02);

  // Add handlers for KLM operators.
  document.addEventListener("click", logClick);
  document.addEventListener("keypress", logKeyPress);


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
    showView("view01");

    // Log current timestamp to start timing trial.
    loggingjs.logEvent(null, 'startTrial', {
      eventName: 'startTrial',
      info: {'timestamp': (new Date()).toString(), 'millis': Date.now()}
    });

  }

  function handleSubmitForm01 (event) {
    event.preventDefault();
    showView("view02");
  }

  function handleSubmitForm02 (event) {
    event.preventDefault();
    showView("view03");
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

  function logClick() {
  }

  function logKeyPress() {
  }

  function logMouseDown() {
    loggingjs.logEvent(null, 'myevent', {
      eventName: 'myeventName',
      info: {'key1': 'val1', 'key2': 'val2'}
    });
  }

}


