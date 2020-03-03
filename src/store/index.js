import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 首页的数组
    goods: [{ name: '商品1', type: 0 }, { name: '商品2', type: 0 }, { name: '商品3', type: 0 }, { name: '商品4', type: 0 }, { name: '商品5', type: 0 }, { name: '商品6', type: 0 }, { name: '商品7', type: 0 }, { name: '商品8', type: 0 }],
    img: [
      {
        src:
          "http://img5.imgtn.bdimg.com/it/u=2951466591,1628494362&fm=26&gp=0.jpg",
        index: 0
      },
      {
        src:
          "http://img4.imgtn.bdimg.com/it/u=1793015254,2350549128&fm=26&gp=0.jpg",
        index: 1
      },
      {
        src:
          "http://img4.imgtn.bdimg.com/it/u=2360697644,450764720&fm=26&gp=0.jpg",
        index: 2
      },
      {
        src:
          "http://img0.imgtn.bdimg.com/it/u=2816655090,2727374974&fm=26&gp=0.jpg",
        index: 3
      },
      {
        src:
          "http://img0.imgtn.bdimg.com/it/u=1825626595,3195443193&fm=26&gp=0.jpg",
        index: 4
      },
      {
        src:
          "http://img4.imgtn.bdimg.com/it/u=3929889194,3304890198&fm=26&gp=0.jpg",
        index: 5
      },
      {
        src:
          "http://img4.imgtn.bdimg.com/it/u=1369962888,2546412892&fm=26&gp=0.jpg",
        index: 6
      },
      {
        src:
          "http://img0.imgtn.bdimg.com/it/u=3280107540,3970344526&fm=26&gp=0.jpg",
        index: 7
      },
      {
        src:
          "http://img1.imgtn.bdimg.com/it/u=1450448867,404255396&fm=26&gp=0.jpg",
        index: 8
      },
      {
        src:
          "http://img2.imgtn.bdimg.com/it/u=2036254803,3628120329&fm=26&gp=0.jpg",
        index: 9
      },
      {
        src:
          "http://img4.imgtn.bdimg.com/it/u=2239090974,3980807180&fm=26&gp=0.jpg",
        index: 10
      },
      {
        src:
          "http://img4.imgtn.bdimg.com/it/u=1187853696,2158542772&fm=26&gp=0.jpg",
        index: 11
      }
    ],
    list: []
  },
  mutations: {
    foot(state, payload) {
      state.list.push(payload);
      // console.log(state.list);
    }
  },
  getters: {
    // 数组反转 去重
    changeArr(state) {
      // 反转
      state.list.reverse();
      // 去重
      var obj = {};
      state.list = state.list.reduce(function (item, next) {
        obj[next.v] ? '' : obj[next.v] = true && item.push(next);
        return item;
      }, []);
      return state.list;
    }

  }
})


