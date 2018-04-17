class Router {
  constructor() {
    // 以键值对的像是存储路由
    this.routes = {};
    // 当前路由都URL
    this.currentUrl = '';
    // 记录出现过的hash
    this.history = [];
    // 作为指针，默认指向this.history的末尾
    this.currentIndex = this,this.history - 1;

    this.refresh = this.refresh.bind(this);
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('hashchange', this.refresh, false);
  }

  // 将path路径与对应的callback函数储存
  route(path, callback) {
    this.routes[path] = callback || function() {}
  }

  // 刷新
  refresh() {
    // 获取当前URL的hash路径
    this.currentUrl = location.hash.slice(1) || '/';
    // 执行当前hash路径的callback函数
    this.routes[this.currentUrl]();
  }
}

router = new Router();
var content = document.querySelector('body');

function changeBgColor(color) {
  content.style.backgroundColor = color;
}

router.route('/', function() {
  changeBgColor('yellow');
})

router.route('/blue', function () {
  changeBgColor('blue');
})

router.route('/green', function() {
  changeBgColor('green');
})
