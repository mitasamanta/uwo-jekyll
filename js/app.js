// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

//$(document).ready(function() {
//  $('.clickable').click(function() {
//    $('i.clickable').toggleClass('rotate180');
//  });
//});

/*$.getJSON("http://feeds.uwosh.edu/api/v1/index.php/combined", function(data) {
    // Now use this data to update your view models,
    // and Knockout will update your UI automatically
    console.log(data);

    function HomePageViewModel() {

      this.events = data.events.value.items;
      console.log(this.events);
    }

    $(function() {
      ko.applyBindings(HomePageViewModel);
    });
});*/

// YouTube Thumbnail and Video Replacement
setTimeout(function() {
  var i, c, y, v, s, n;
  v = document.getElementsByClassName("youtube");
  if (v.length > 0) {
      s = document.createElement("style");
      s.type = "text/css";
      s.innerHTML = '.youtube{background-color:#000;max-width:100%;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;background:url("data:image/png;base64,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") no-repeat}';
      document.body.appendChild(s)
  }
  for (n = 0; n < v.length; n++) {
      y = v[n];
      i = document.createElement("img");
      i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
      i.setAttribute("class", "thumb");
      i.setAttribute("alt", "");
      c = document.createElement("div");
      c.setAttribute("class", "play");
      y.appendChild(i);
      y.appendChild(c);
      y.onclick = function () {
          var a = document.createElement("iframe");
          a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
          a.style.width = this.style.width;
          a.style.height = this.style.height;
          this.parentNode.replaceChild(a, this)
      }
  };
}, 2001);

// Reflow Equalizer after content is loaded
setTimeout(function() {
  $(document).foundation('equalizer','reflow');
}, 1001);

// Fix orbit height issue
setTimeout(function() {
  $(document).resize();
}, 1000);

// Reflow Equalizer after content is loaded
setTimeout(function() {
  $(document).foundation('equalizer','reflow');
}, 8001);






// jQuery Port
$( document ).ready(function() {

  if ($('html').hasClass('page--home')) {

    $.ajax({
      url: "http://feeds2.uwosh.edu/api/v2/index.php/uwo-api",
      dataType: 'json',
      success: function( data )
      {
        pillarEducationLoad(data.pillarEducation.posts[0]);
        pillarServiceLoad(data.pillarService.posts[0]);
        pillarSustainabilityLoad(data.pillarSustainability.posts[0]);
        pillarLeadershipLoad(data.pillarLeadership.posts[0]);
        pillarResponsivenessLoad(data.pillarResponsiveness.posts[0]);
        eventsLoad(data.events.value.items);
        panelLoad(data.admissions.posts[0], 'study-uwo');
        panelLoad(data.uwotw.posts[0], 'uwotw');
        panelLoad(data.campusNews.posts[0], 'campus-news');
        panelLoad(data.twif.posts[0], 'faculty-five');
        panelLoad(data.chancellor.posts[0], 'chancellor');
        panelLoad(data.iAmATitan.posts[0], 'i-am-a-titan');
        panelLoad(data.meetUwo.posts[0], 'meet-uwo');
        panelLoad(data.poweringCommunity.posts[0], 'powering-community');
        panelLoad(data.researchNews.posts[0], 'research-news');
        tweetsLoad(data.twitter);
        facebookLoad(data.facebook.data);
        youtubeLoad(data.youtube.data.items);
        //flickrLoad(data.flickr.photosets.photoset);

        $('.pillar-slick').slick({
          autoplay: true,
          autoplaySpeed: 6000,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          arrows: false,
          lazyLoad: 'ondemand',
          slidesToShow: 1,
          slidesToScroll: 1
      	});

        $('.fade--pillar-slick').addClass("in");
      }
    });

    $.ajax({
      url: "http://feeds2.uwosh.edu/api/v2/index.php/emergency/broadcast",
      dataType: 'json',
      success: function( data )
      {
        emergencyLoad(data.posts);
      }
    });

  };

});

var postExcerpt = function(rawString, chars) {
  chars = chars || 170;
  var presubstr = rawString;
  var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
  var truncstring = $.trim(strippedstr).substring(0,chars).split(" ").slice(0, -1).join(" ") + "...";
  return truncstring;
};

var eventsLoad = function(events) {
  var eventHtml = '';

  $.each(events, function(index, event) {
    var eventMonth = moment(new Date(event['ev:tribe_event_meta']['ev:startdate'])).format('MMM');
    var eventDay = moment(new Date(event['ev:tribe_event_meta']['ev:startdate'])).format('D');
    var startTime = moment(new Date(event['ev:tribe_event_meta']['ev:startdate'])).format('h a');
    var endTime = moment(new Date(event['ev:tribe_event_meta']['ev:enddate'])).format('h a');
    var description = $.trim(event.description).substring(0,130).split(" ").slice(0, -1).join(" ") + "...";

    eventHtml = eventHtml + '
      <div class="large-8 medium-8 small-24 columns">
        <div class="media">
          <a class="media__img viewEvent" href="' + event.link + '">
            <div class="event-item__calendar">
              <div class="event-item__calendar--month">' + eventMonth + '.</div>
              <div class="event-item__calendar--day">' + eventDay + '</div>
            </div>
          </a>
          <div class="media__body">
            <a class="viewEvent" href="' + event.link + '"><h4 class="event-item__title body-content">' + event.title + '</h4></a>
            <div class="event-item__time body-content">' + startTime + '&ndash;' +  endTime + '</div>
            <div class="event-item__location body-content">' + description + '</div>
          </div>
        </div>
      </div>
    ';
  });
  $('.event-list').html(eventHtml);
  $('.fade--events').addClass("in");
};

var panelLoad = function(post, panelClass) {
  var excerpt = $.truncate(post.excerpt, { length: 170 });
  //var excerpt = postExcerpt(post.excerpt);
  var rawdate = moment(new Date(post.date)).format();
  var date = moment(rawdate).fromNow();

  $('.' + panelClass + '-title').html(post.title);
  $('.' + panelClass + '-excerpt').html(excerpt);
  $('.' + panelClass + '-postdate').text(date);
  $('.' + panelClass + '-postdate').attr("datetime", date);
  $('.' + panelClass + '-url').attr("href", post.url);


  if (post.custom_fields.youtube_id) {
    var postHtml = '
      <div id="studyAtUwOshkoshVideo" class="panel__video-wrapper">
        <div class="youtube" id="' + post.custom_fields.youtube_id[0] + '" style="height:189px;"></div>
      </div><br>
    ';
    $('.' + panelClass + '-media').html(postHtml);
  } else {
    var postHtml = '
      <a href="" class="studyAtUwoFullStory ' + panelClass + '-url">
        <div class="panel__video-wrapper">
          <img src="' + post.thumbnail_images.medium.url + '" class="panel__image--home ' + panelClass + '-image" alt="' + post.title + '" />
        </div><br>
      </a>
    ';
    $('.' + panelClass + '-media').html(postHtml);
  };

  $('.fade--' + panelClass).addClass("in");
};

var tweetsLoad = function(tweets) {
  var tweetHtml = '';

  $.each(tweets, function(index, tweet) {
    var rawdate = moment(new Date(tweet.created_at)).format();
    var tweetDate = moment(rawdate).fromNow();

    tweetHtml = tweetHtml + '
      <slide>
        <div class="twitter-article social-article">
          <div class="media">
            <a class="media__img" href="https://twitter.com/' + tweet.user.screen_name + '" target="_blank"><img class="media-object twitter-article__avatar" src="' +  tweet.user.profile_image_url_https + '" alt="UW Oshkosh Twitter profile image"></a>
            <div class="media__body">
              <div class="media-heading">
                <span class="tweetprofilelink">
                  <strong>' + tweet.user.name + '</strong> <a href="https://twitter.com/' +  tweet.user.screen_name + '" target="_blank">@' + tweet.user.screen_name + '</a>
                </span><br>
                <span class="tweet-time">
                  <a href="https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str + '" target="_blank"><i class="fa fa-clock-o datetime"></i> <time class="datetime" datetime="' + tweet.created_at + '">' + tweetDate + '</time></a>
                </span>
              </div>
              <p>' + tweet.text + '</p>
              <p class="twitter-intents">
                <a href="https://twitter.com/intent/tweet?in_reply_to=' + tweet.id_str + '" target="_blank"><i class="fa fa-fw fa-reply"></i> Reply &nbsp;</a>
                <a ng-href="https://twitter.com/intent/retweet?tweet_id=' + tweet.id_str + '" target="_blank"><i class="fa fa-fw fa-retweet"></i> Retweet &nbsp;</a>
                <a ng-href="https://twitter.com/intent/favorite?tweet_id=' + tweet.id_str + '" target="_blank"><i class="fa fa-fw fa-star"></i> Favorite</a></p>
            </div>
          </div>
        </div>
      </slide>
    ';
  });
  $('#deck-twitter').html(tweetHtml);
};

var facebookLoad = function(fbposts) {
  var facebookHtml = '';

  $.each(fbposts, function(index, fbpost) {
    if (fbpost.message) {
      var rawdate = moment(new Date(fbpost.created_time)).format();
      var fbpostDate = moment(rawdate).fromNow();

      facebookHtml = facebookHtml + '
        <slide>
          <div class="twitter-article facebook-article social-article">
            <div class="media">
              <a class="media__img" href="https://www.facebook.com/uwoshkosh">
                <img src="http://www.uwosh.edu/img/facebook-wordmark.jpg" alt="UW Oshkosh wordmark">
              </a>
              <div class="media__body">
                <strong>UW Oshkosh</strong>
              </div>
            </div>
            <p>
              <!-- <img ng-src="{{ fbpost.picture }}" class="right" alt=""> --><span>' + fbpost.message + '</span>&hellip; <a ng-href="' + fbpost.link + '" target="_blank" alt="" >Read more</a>
            </p>
            <div>
              <span class="social-feed-date posted-date uppercase datetime"><i class="fa fa-clock-o"></i> <time class="datetime" datetime="' + fbpost.updated_time + '">' + fbpostDate + '</time></span><span class="datetime social-feed-likes">' + fbpost.likes.data.length + ' people like this</span>
            </div>
          </div>
        </slide>
      ';
    };
  });
  $('#deck-facebook').html(facebookHtml);
};

var youtubeLoad = function(videos) {
  var youtubeHtml = '';

  $.each(videos, function(index, video) {
    var rawdate = moment(new Date(video.updated)).format();
    var videoDate = moment(rawdate).fromNow();

    youtubeHtml = youtubeHtml + '
      <slide>
        <div class="twitter-article social-article">
          <div class="youtube" id="' + video.id + '" style="height:160px;"></div>
          <p class="body-content">' + video.title + '</p>
          <span class="social-feed-date posted-date uppercase datetime"><i class="fa fa-clock-o"></i> <time class="datetime" datetime="' + video.updated + '">' + videoDate + '</time></span>
        </div>
      </slide>
    ';
  });
  $('#deck-youtube').html(youtubeHtml);
};

var emergencyLoad = function(posts) {
  var postHtml = '';

  $.each(posts, function(index, post) {
    if (post.title) {
      var postDate = moment(new Date(post.modified)).format('MMM D h:m a');

      postHtml = postHtml + '
        <div data-alert class="alert-box small-24 columns">
          <span class="drop-down-nav">' + post.title + '</span>&hellip; <a href="' + post.url + '" style="color:#fff;text-decoration:underline;font-size:16px;line-height:24px;">Read more</a><br>
          <span class="datetime" style="color:#fff;"><i class="fa fa-clock-o"></i> <time datetime="' + post.date + '"> ' + postDate + '</time></span>
        </div>
      ';
    };
  });
  $('#emergency-alert').html(postHtml);
  $('.fade--emergency').addClass("in");
};

var pillarEducationLoad = function(post) {
  var excerpt = postExcerpt(post.excerpt, 60);
  //var excerpt = $.truncate(post.excerpt, { length: 60 });

  $('.pillar-education-title').html(post.title);
  $('.pillar-education-excerpt').html(excerpt);
  $('.pillar-education-url').attr("href", post.url);
  $('.pillar-education-image').attr("data-lazy", post.custom_fields.pillar_image);

};

var pillarServiceLoad = function(post) {
  var excerpt = postExcerpt(post.excerpt, 60);
  //var excerpt = $.truncate(post.excerpt, { length: 60 });

  $('.pillar-service-title').html(post.title);
  $('.pillar-service-excerpt').html(excerpt);
  $('.pillar-service-url').attr("href", post.url);
  $('.pillar-service-image').attr("data-lazy", post.custom_fields.pillar_image);

};

var pillarSustainabilityLoad = function(post) {
  var excerpt = postExcerpt(post.excerpt, 60);
  //var excerpt = $.truncate(post.excerpt, { length: 60 });

  $('.pillar-sustainability-title').html(post.title);
  $('.pillar-sustainability-excerpt').html(excerpt);
  $('.pillar-sustainability-url').attr("href", post.url);
  $('.pillar-sustainability-image').attr("data-lazy", post.custom_fields.pillar_image);

};

var pillarLeadershipLoad = function(post) {
  var excerpt = postExcerpt(post.excerpt, 60);
  //var excerpt = $.truncate(post.excerpt, { length: 60 });

  $('.pillar-leadership-title').html(post.title);
  $('.pillar-leadership-excerpt').html(excerpt);
  $('.pillar-leadership-url').attr("href", post.url);
  $('.pillar-leadership-image').attr("data-lazy", post.custom_fields.pillar_image);

};

var pillarResponsivenessLoad = function(post) {
  var excerpt = postExcerpt(post.excerpt, 60);
  //var excerpt = $.truncate(post.excerpt, { length: 60 });

  $('.pillar-responsiveness-title').html(post.title);
  $('.pillar-responsiveness-excerpt').html(excerpt);
  $('.pillar-responsiveness-url').attr("href", post.url);
  $('.pillar-responsiveness-image').attr("data-lazy", post.custom_fields.pillar_image);

};
