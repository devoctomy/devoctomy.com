var Tabs = (function() {
  var s;
  var currentIdx = 0;
  var prevIdx = 0;  

  return {
    settings: {
      tabs: document.getElementsByClassName('tabs__item'),
      tabPages: document.getElementsByClassName('tab')
    },

    init: function() {
      s = this.settings;
      this.display();
      this.click();
    },
	
	selectExternal: function(i) {
	  prevIdx = currentIdx;
	  currentIdx = i;
      s.tabPages[prevIdx].style.display = 'none';
      s.tabPages[prevIdx].classList.remove('active');
      s.tabs[prevIdx].classList.remove('active');
      s.tabPages[currentIdx].style.display = 'block';
      s.tabPages[currentIdx].classList.add('active');
      s.tabs[currentIdx].classList.add('active');
	},

    display: function() {
      if (s.tabPages.length) {
        [].forEach.call(s.tabPages, function(tabPage) {
          tabPage.style.display = 'none';
        });
        s.tabPages[0].style.display = 'block';
        s.tabPages[0].classList.add('active');
        s.tabs[0].classList.add('active');
      }
    },

    click: function() {
      if (s.tabs.length) {
        [].forEach.call(s.tabs, function(tab, idx) {
          tab.addEventListener('click', function() {
            prevIdx = currentIdx;
            currentIdx = idx;

            if (prevIdx !== currentIdx) {
              s.tabPages[prevIdx].style.display = 'none';
              s.tabPages[prevIdx].classList.remove('active');
              s.tabs[prevIdx].classList.remove('active');
              s.tabPages[currentIdx].style.display = 'block';
              s.tabPages[currentIdx].classList.add('active');
              s.tabs[currentIdx].classList.add('active');
            }
          });
        });
      }
    }

  }
})();

var Preview = (function() {
  var s;

  return {
    settings: {
      img: document.getElementsByClassName('preview__img'),
      post: document.getElementsByClassName('preview')
    },

    init: function() {
      s = this.settings;
      this.display();
      this.mouseenter();
    },

    display: function() {
      if (s.img.length) {
        [].forEach.call(s.img, function(img) {
          img.style.display = 'none';
        });
        s.img[0].style.display = 'block';
      }
    },

    mouseenter: function() {
      if (s.post.length) {
        var currentIdx = 0,
            prevIdx = currentIdx;

        [].forEach.call(s.post, function(preview, idx) {
          preview.addEventListener('mouseenter', function() {
            prevIdx = currentIdx;
            currentIdx = idx;

            if (prevIdx !== currentIdx) {
              s.img[prevIdx].style.display = 'none';
              s.img[currentIdx].style.display = 'block';
            }
          });
        });
      }
    }
  }
})();

var wow = new WOW({
  animateClass: 'fade-in'
});

function getParameterByName(name, url)
{
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

document.addEventListener('DOMContentLoaded', function() {
  Tabs.init();
  Preview.init();
  wow.init(); 
  
  var tab = getParameterByName('tab');
  if(tab) Tabs.selectExternal(tab);
});
