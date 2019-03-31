<template>
  <div class="firstContainer">
    <div class="headSearch">
      <!--头部-->
      <header class="head">
        <a class="logo">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        </a>
        <div class="search">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
          <span>搜索商品，共22110款好物</span>
        </div>
        <div class="login">登录</div>
      </header>
      <!--导航-->
      <div class="listNav">
        <div class="left">
          <ul class="list">
            <li class="active">推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个户清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>全球特色</li>
          </ul>
        </div>
        <div class="linear"></div>
        <div class="arrowImg" @click="toggole">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="">
        </div>
        <div class="allChannel" v-show="is_open">
          <div class="title">
            <span>全部频道</span>
          </div>
          <ul class="channelList">
            <li class="active">推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个户清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>全球特色</li>
          </ul>
        </div>
      </div>
    </div>
    <!--轮播-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../static/imgs/1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/imgs/2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../static/imgs/3.jpg" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--服务列表-->
    <div class="serverList">
      <ul class="serverUl">
        <li>
          <img src="http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
          <span>网易自营品牌</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
          <span>30天无忧退货</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>
    <div class="container">
      <!--商品分类-->
      <ul class="categorys">
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
          <span>居家生活</span>
        </li>
      </ul>
      <!--新人专享-->
      <div class="freshManServe">
        <div class="freshManTitle">
          <span>—  新人专享礼  —</span>
        </div>
        <div class="freshClassify">
          <div class="left">
            <a href="javascript:;">
              <span>新人专享礼包</span>
              <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
            </a>
          </div>
          <div class="right">
            <ul class="rightList">
              <li>
                <div class="title">
                  <h2>福利社</h2>
                  <span>今日特价</span>
                </div>
                <img src="../../../static/imgs/1.jpg" alt="">
              </li>
              <li>
                <div class="title">
                  <h2>新人拼</h2>
                  <span>1元起包邮</span>
                </div>
                <img src="../../../static/imgs/1.jpg" alt="">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--品牌制造商专供-->
      <div class="brandServer">
        <div class="brandTitle">
          <span>品牌制造商直供</span>
          <div class="right">
            <span>更多</span>
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png" alt="">
          </div>
        </div>
        <NoTitleList/>
      </div>
      <!--类目热销-->
      <div class="hotSell">
        <div class="hotTitle">
          <span>类目热销榜</span>
        </div>
        <div class="hotList">
          <ul class="hotClassify">
            <li>
                <span>好评榜</span>
            </li>
            <li>
                <span>好评榜</span>
            </li>
          </ul>
          <ul class="productList">
            <li>
              <span>居家生活榜</span>
              <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li>
              <span>居家生活榜</span>
              <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li>
              <span>居家生活榜</span>
              <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li>
              <span>居家生活榜</span>
              <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li>
              <span>居家生活榜</span>
              <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li>
              <span>居家生活榜</span>
              <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li>
              <span>居家生活榜</span>
              <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
            <li>
              <span>居家生活榜</span>
              <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>
          </ul>
        </div>
      </div>
      <!--人气推荐-->
      <div class="bestPopular">
        <div class="bestTitle">
          <span>人气推荐</span>
          <div class="right">
            <span>更多</span>
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png" alt="">
          </div>
        </div>
        <div class="hotProduct">
          <img src="http://yanxuan.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png?imageView&quality=65&thumbnail=280x280" alt="">
          <div class="right">
          </div>
        </div>
        <ul class="hotList">
          <li>
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>爆品</p>
              <p>限时购</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>爆品</p>
              <p>限时购</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>限时购</p>
            </div>
          </li>
        </ul>
      </div>
      <!--限时购-->
      <div class="timeToBuy">
        <div class="timeTitle">
          <span>限时购</span>
          <div class="right">
            <span>更多</span>
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png" alt="">
          </div>

        </div>
        <ul class="TimeList">
          <li>
            <img src="http://yanxuan.nosdn.127.net/7a573716f0a003a8b3893c2601fd6346.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="productPrice">
              <span>￥199</span>
              <span>￥216</span>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/7a573716f0a003a8b3893c2601fd6346.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="productPrice">
              <span>￥199</span>
              <span>￥216</span>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/7a573716f0a003a8b3893c2601fd6346.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="productPrice">
              <span>￥199</span>
              <span>￥216</span>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/7a573716f0a003a8b3893c2601fd6346.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="productPrice">
              <span>￥199</span>
              <span>￥216</span>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/7a573716f0a003a8b3893c2601fd6346.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="productPrice">
              <span>￥199</span>
              <span>￥216</span>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/7a573716f0a003a8b3893c2601fd6346.png?imageView&thumbnail=216x216&quality=75" alt="">
            <div class="productPrice">
              <span>￥199</span>
              <span>￥216</span>
            </div>
          </li>

        </ul>
      </div>
      <!--新品首发-->
      <div class="newProducts">
        <div class="timeTitle">
          <span>新品首发</span>
          <div class="right">
            <span>更多</span>
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png" alt="">
          </div>
        </div>
        <ul class="hotList">
          <li>
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>爆品</p>
              <p>限时购</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>爆品</p>
              <p>限时购</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>限时购</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>爆品</p>
              <p>限时购</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>爆品</p>
              <p>限时购</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>限时购</p>
            </div>
          </li>
        </ul>

      </div>
      <!--无题列表-->
      <div class="noTitleList">
        <ul class="list">
          <li>
            <a href="javascript:;">
              <h4>春茶尝鲜季</h4>
              <div class="price">
                <span>预售好价75折</span>
              </div>
              <div class="imgs">
                <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&thumbnail=150x150&quality=75" alt="">
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <h4>早春添新鞋</h4>
              <div class="price">
                <span>休闲鞋/高跟鞋/等等</span>
              </div>
              <div class="imgs">
                <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&thumbnail=150x150&quality=75" alt="">
              </div>

            </a>
          </li>
          <li>
            <a href="javascript:;">
              <h4>春季包包大种草</h4>
              <div class="price">
                <span>复古桶包/双肩包89元起</span>
              </div>
              <div class="imgs">
                <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&thumbnail=150x150&quality=75" alt="">
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <h4>按摩神器大赏</h4>
              <div class="price">
                <span>仿真人手按摩</span>
              </div>
              <div class="imgs">
                <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&thumbnail=150x150&quality=75" alt="">
              </div>

            </a>
          </li>
        </ul>

      </div>
      <div class="categoryModule">
        <div class="categoryItem">
          <img src="../../../static/imgs/1.jpg" alt="">
          <div class="categoryList">
            <ul>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">￥440</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <div class="moreProduct">
                  <span class="lookMore">查看更多 ></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="categoryItem">
          <img src="../../../static/imgs/1.jpg" alt="">
          <div class="categoryList">
            <ul>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">￥440</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <div class="moreProduct">
                  <span class="lookMore">查看更多 ></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="categoryItem">
          <img src="../../../static/imgs/1.jpg" alt="">
          <div class="categoryList">
            <ul>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">￥440</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <div class="moreProduct">
                  <span class="lookMore">查看更多 ></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="categoryItem">
          <img src="../../../static/imgs/1.jpg" alt="">
          <div class="categoryList">
            <ul>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">￥440</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <p class="price">
                    <span>￥254</span>
                    <span style="text-decoration: line-through;color:#999">￥299</span>
                  </p>
                </div>
                <div class="status">
                  <p>爆品</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="product">
                  <span class="detail">网易智造N520除螨吸尘器</span>
                  <span class="price">￥440</span>
                </div>
                <div class="status">
                  <p>爆品</p>
                  <p>限时购</p>
                </div>
              </li>
              <li>
                <div class="moreProduct">
                  <span class="lookMore">查看更多 ></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footerBox">
        <div class="topLink">
          <a href="javascript:;">下载APP</a>
          <a href="javascript:;">电脑版</a>
        </div>
        <p class="bottomContent">
          <span>网易公司版权所有 © 1997-2019</span><br/>
          <span>食品经营许可证：JY13301080111719</span>
          
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  
  import NoTitleList from '../../components/NoTitleList/NoTitleList.vue'
  
  export default {
    data () {
      return {
        is_open:false
      }
    },
    components: {
      NoTitleList
    },
    methods: {
      toggole () {
        this.is_open = !this.is_open
      }
    },
    mounted () {
      new BScroll('.left',{
        scrollX: true,
        click:true
      })
      new BScroll('.categoryList',{
        scrollX: true,
        click:true
      })
      new Swiper('.swiper-container', {
        autoplay:false,//等同于以下设置
        pagination: {//小圆点
          el: '.swiper-pagination',
        },
     
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .firstContainer
    position relative
    background-color #f4f4f4
    .headSearch
      position fixed
      left 0
      top 0
      z-index 50
      .head
        width 100%
        display flex
        align-items center
        box-sizing border-box
        padding 20px
        height 90px
        background-color white
        .logo
          margin-left 15px
          img
            width 138px
            height 40px
        .search
          display flex
          justify-content center
          align-items center
          box-sizing border-box
          width 442px
          height 56px
          background #ededed
          margin 0 15px
          border-radius 15px
          padding 10px
          color #666
          img
            width 28px
            height 28px
            margin-right 5px
        .login
          text-align center
          width 70px
          height 35px
          line-height 35px
          border 2px solid #b4282d
          border-radius 10px
          color #b4282d
      /*导航*/
      .listNav
        position relative
        display flex
        box-sizing border-box
        height 60px
        background-color white
        .left
          width 600px
          overflow hidden
          .list
            position relative
            display flex
            justify-content space-around
            width 1460px
            height 60px
            margin-left 10px
            li
              box-sizing border-box
              height 60px
              line-height 60px
              font-size 28px
              padding 0 15px
              &.active
                color #b4282d
                border-bottom 8px solid #b4282d
        .linear
          width 60px
          height 100%
          background-color rgba(255,255,255,.7)
        .arrowImg
          height 60px
          width 120px
          img
            position absolute
            left 674px
            top 12px
            width 30px
            height 30px
            z-index 20
        .allChannel
          position absolute
          left 0
          top 0
          width 100%
          height 370px
          z-index 2
          box-sizing border-box
          background #fff
          .title
            width 100%
            height 60px
            line-height 60px
            box-sizing border-box
            padding 0 20px
          .channelList
            display flex
            flex-wrap wrap
            li
              width 140px
              height 56px
              line-height 56px
              text-align center
              border 2px solid #ccc
              border-radius 5px
              margin 20px
              font-size 24px
              background #fafafa
              &.active
                color #b4282d
                border 2px solid #b4282d
  
    
    
    
    /*轮播*/
    .swiper-container
      margin-top 150px
      .swiper-wrapper
        .swiper-slide
          img
            width 100%
            height 400px
      
    /*服务列表*/
    .serverList
      height 72px
      background-color white
      
      .serverUl
        height 72px
        display flex
        justify-content space-around
        li
          height 72px
          line-height 72px
          img
            display inline-block
            width 32px
            height 32px
            vertical-align middle
          span
            vertical-align middle
            font-size 24px
            color #B4282D



    .container
      width 750px
      height 6500px
      background-color #007aff
        /*商品分类*/
      .categorys
        display flex
        flex-wrap wrap
        justify-content space-around
        width 100%
        height 340px
        padding-bottom 35px
        li
          width 110px
          height 156px
          padding 10px
          color #333
          img
            width 110px
            height 110px
            margin-bottom 10px
      /*新人专享*/
      .freshManServe
        box-sizing border-box
        width 750px
        height 558px
        background-color white
        padding 0 30px 30px
        .freshManTitle
          height 90px
          color #333
          font-size 32px
          text-align center
          line-height 90px
        .freshClassify
          width 100%
          height 438px
          display flex
          .left
            width 343px
            height 434px
            background-color #F9E9CF
            a
              box-sizing border-box
              span
                display block
                height 78px
                color #333
                font-size 32px
                padding 30px 0 0 30px
              img
                width 258px
                height 257px
                margin 0 0 40px 40px
          .right
            margin-left 3px
            width 343px
            height 215px
            .rightList
              li
                display flex
                padding 20px 0 0 30px
                box-sizing border-box
                &:first-child
                  background-color #FBE2D3
                  margin-bottom 4px
                &:last-child
                  background-color #FFECC2
                .title
                  display flex
                  flex-direction column
                  width 343px
                  height 20px
                  h2
                    display block
                    font-size 32px
                    color #333
                    margin-bottom 8px
                  span
                    display block
                    color #7f7f7f
                    font-size 24px
                img
                  width 195px
                  height 195px
                  float right
       /*品牌制造专供*/
      .brandServer
        width 100%
        padding 0 30px
        box-sizing border-box
        height 655px
        background-color white
        margin-top 20px
        .brandTitle
          height 100px
          line-height 100px
          width 100%
          span
            float left
            color #333
            font-size 32px
          .right
            float right
            img
              width 13px
              height 23px
              vertical-align middle
              margin-left 10px
            span
              font-size 28px
              vertical-align middle
  
       /*类目热销*/
      .hotSell
        width 100%
        height 710px
        padding 0 30px
        box-sizing border-box
        background-color white
        margin-top 30px
        .hotTitle
          height 100px
          line-height 100px
          width 100%
          font-size 32px
        .hotList
          width 100%
          height 610px
          .hotClassify
            display flex
            li
              position relative
              width 340px
              height 200px
              line-height 200px
              background-size 200px 200px
              background-repeat no-repeat
              background-position-x 130px
              margin-bottom 10px
              &:first-child
                background-image url("http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&quality=65&thumbnail=200x200")
                background-color #F9F3E4
                margin-right 10px
              &:last-child
                background-color #EBEFF6
                background-image url("http://yanxuan.nosdn.127.net/1fa535e25330987297a27e63c27db2e6.png?imageView&quality=65&thumbnail=200x200")
              span
                position absolute
                left 30px
                color #333
                font-size 28px
                display block
          .productList
            display flex
            flex-wrap wrap
            box-sizing border-box
            li
              width 162px
              height 180px
              background-color #f5f5f5
              text-align center
              padding 20px 0
              box-sizing border-box
              margin-right 10px
              margin-bottom 10px
              span
                margin-top 50px
              img
                height 120px
                width 120px
  
        
        
  
       /*人气推荐*/
      .bestPopular
        padding 0 30px
        box-sizing border-box
        width 750px
        height 784px
        background white
        margin-top 20px
        .bestTitle
          height 100px
          line-height 100px
          width 100%
          span
            float left
            color #333
            font-size 32px
          .right
            float right
            img
              width 13px
              height 23px
              vertical-align middle
              margin-left 10px
            span
              font-size 28px
              vertical-align middle

        .hotProduct
          width 100%
          height 280px
          background #FEF0DF
          display flex
          img
            width 280px
            height 280px
          .right
            height 100%
            width 100%
            flex 1
            background yellow
        .hotList
          display flex
          justify-content space-between
          width 100%
          height 354px
          margin-top 20px
          li
            height 100%
            width 30%
            img
              height 216px
              width 216px
              background #f5f5f5
            .product
              margin 10px 0
              line-height 30px
              .detail
                font-size 24px
                
                color #333
              .price
                color #b4282d
            .status
              p
                display inline-block
                height 32px
                line-height 32px
                border 1px solid red
                border-radius 15px
                color red
                padding 2px 15px
                
       /*限时购*/
      .timeToBuy
        height 700px
        background white
        padding 0 20px
        box-sizing border-box
        margin-top 20px
        width 750px
        .timeTitle
          height 100px
          line-height 100px
          width 100%
          span
            float left
            color #333
            font-size 32px
          .time
            span
              margin-left 10px
              display inline-block
              &:nth-child(2n+1)
                background rgba(0,0,0,.7)
                width 36px
                height 36px
                font-size 24px
                color white
                margin-top 35px
                border-radius 5px
          .right
            float right
            img
              width 13px
              height 23px
              vertical-align middle
              margin-left 10px
            span
              font-size 28px
              vertical-align middle

        .TimeList
          display flex
          flex-wrap wrap
          justify-content space-between
          width 100%
          height 598px
          li
            height 280px
            width 216px
            margin-bottom 20px
            img
              height 216px
              width 216px
              background #f5f5f5
            .productPrice
              margin 20px 0 0 20px
              span
                &:first-child
                  font-size 28px
                  color #b4282d
                &:last-child
                  font-size 24px
                  text-decoration line-through
                  color #7f7f7f
        /*新品首发*/
      .newProducts
        height 834px
        background white
        padding 0 20px
        box-sizing border-box
        margin-top 20px
        width 750px
        .timeTitle
          height 100px
          line-height 100px
          width 100%
          span
            float left
            color #333
            font-size 32px
          .right
            float right
            img
              width 13px
              height 23px
              vertical-align middle
              margin-left 10px
            span
              font-size 28px
              vertical-align middle
    
        .hotList
          display flex
          flex-wrap wrap
          justify-content space-between
          width 100%
          height 354px
          margin-top 20px
          li
            height 100%
            width 30%
            img
              height 216px
              width 216px
              background #f5f5f5
            .product
              margin 10px 0
              line-height 30px
              .detail
                font-size 24px
          
                color #333
              .price
                color #b4282d
            .status
              p
                display inline-block
                height 32px
                line-height 32px
                border 1px solid red
                border-radius 15px
                color red
                padding 2px 15px

      .noTitleList
        width 100%
        height 576px
        margin-top 20px
        padding 20px 30px
        box-sizing border-box
        background white
        .list
          display: flex
          flex-wrap wrap
          li
            padding 20px 0 0 20px
            box-sizing border-box
            width 340px
            height 260px
            background-color #f4f4f4
            margin-right 4px
            margin-bottom 4px
            background-image url("http://yanxuan.nosdn.127.net/c097be1….png?imageView&thumbnail=343y260&enlarge=1")
            a
              h4
                color #333
                font-size 28px
              .price
                margin 10px 0
              .imgs
                img
                  width 150px
                  height 150px
                
      .categoryModule
        background #f4f4f4
        margin-top 20px
        width 100%
        height 3200px
        .categoryItem
          margin-bottom 20px
          width 750px
          background white
          height 781px
          img
            width 750px
            height 370px
          .categoryList
            overflow hidden
            height 390px
            width 720px
            margin-left 20px
            box-sizing border-box
            ul
              display flex
              margin 20px 30px 0 30px
              width 2000px
              height 100%
              li
                height 361px
                width 200px
                margin-right 20px
                img
                  height 200px
                  width 200px
                  background #f5f5f5
                .product
                  margin 10px 0
                  line-height 35px
                  .detail
                    font-size 24px
                    color #333
                  .price
                    color #b4282d
                .status
                  p
                    display inline-block
                    height 32px
                    line-height 32px
                    border 1px solid red
                    border-radius 15px
                    color red
                    padding 2px 15px


      .footerBox
        width 750px
        height 244px
        background #414141
        margin-bottom 98px
        .topLink
          display flex
          a
            display block
            width 172px
            font-size 24px
            color white
            border 1px solid #fff
            height 62px
            text-align center
            line-height 62px
          .bottomContent
            width 100%
            text-align center
</style>
