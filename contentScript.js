(() => {
  let youtubeRightControls, youtubePlayer;
  let currentVideo = "";

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, videoId, value } = obj;

    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
    }
  });

  const newVideoLoaded = () => {
    const bookmarkBtnExists =
      document.getElementsByClassName("bookmark-btn")[0];
    const durationRendered = document.getElementsByClassName("ytp-time-duration")[0];
    if (!bookmarkBtnExists && durationRendered) {
      const bookmarkBtn = document.createElement("img");
      bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
      bookmarkBtn.title = "Click on the btn to Bookmark the video";
      bookmarkBtn.className = "ytp-button bookmark-btn";
      bookmarkBtn.style = "width: 105px;"

      youtubeRightControls =
        document.getElementsByClassName("ytp-right-controls")[0];
      youtubePlayer = document.getElementsByClassName("video-stream")[0];

      youtubeRightControls.appendChild(bookmarkBtn);
      bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);

    }
  };

  const addNewBookmarkEventHandler = async () => {
    // Your bookmark creation logic here
  };

  newVideoLoaded();
})();
