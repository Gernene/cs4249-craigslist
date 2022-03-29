window.onload = function() {
    const views = document.getElementsByClassName("view");
    const createPostBtn = document.getElementById("create-post-btn");
    const createPostForm = document.getElementById("create-post-form");
    const logVer = document.getElementById("log-version").innerText;
  
    // Display landing page with specified CSS id.
    showView("view-landing");
  
    // Handle key milestones in user journey.
    createPostBtn.addEventListener("click", handleClickCreatePostBtn);
    createPostForm.addEventListener("submit", handleSubmitCreatePostForm);

    // Add handlers for KLM operators.
    document.addEventListener("click", loggingjs.logEvent);

    setLogVer(logVer);
  
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
    }
  
    function handleSubmitCreatePostForm(event) {
      event.preventDefault();
      showView("view-post-created");
    }
  
  }
    