---
id: 777
title: '【筆記】易讀程式之美學 &#8211; 提升程式碼可讀性的簡單法則 (The Art of Readable Code)'
date: 2015-11-25T20:01:03+00:00
author: wildsky
layout: post
guid: https://wildsky.cc/?p=777
permalink: /the-art-of-readable-code/
dsq_thread_id:
  - 4349524331
categories:
  - Coding
  - 心得筆記
---
<div class="pf-content">
  <div>
    終於讀完這本書了！在看的過程中一直把自己最近要交的作業拿回來改XD 之後可能還會再多看幾次～ 幸好當初有買下來哈哈！
  </div>
  
  <div>
  </div>
  
  <div>
  </div>
  
  <div>
    <img class="en-media" src="https://www.evernote.com/shard/s351/res/23cde9f2-53ec-4331-8d3d-40099cc67318/IMG_20150924_001452.376.jpg" alt="" name="23cde9f2-53ec-4331-8d3d-40099cc67318" />
  </div>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    <!--more-->
  </p>
  
  <h2>
    <span style="font-size: 36px;">改善表層</span>
  </h2>
  
  <h3>
    <span style="font-size: 24px;">命名</span>
  </h3>
  
  <h4>
    <span style="font-size: 18px;">替代詞彙</span>
  </h4>
  
  <div>
    <div>
    </div>
    
    <div>
      <table style="border-collapse: collapse; table-layout: fixed;" border="1" width="100%" cellspacing="0" cellpadding="2">
        <tr>
          <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
            原詞
          </td>
          
          <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
            可能的取代方案
          </td>
        </tr>
        
        <tr>
          <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
            Send
          </td>
          
          <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
            deliver, dispatch, announce, distribute, route
          </td>
        </tr>
        
        <tr>
          <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
            Find
          </td>
          
          <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
            search, extract, locate, recover
          </td>
        </tr>
        
        <tr>
          <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
            Start
          </td>
          
          <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
            launch, create, begin, open
          </td>
        </tr>
        
        <tr>
          <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
            Make
          </td>
          
          <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
            create, set up, build, generate, compose, add, new
          </td>
        </tr>
      </table>
    </div>
    
    <h4>
      <span style="font-size: 18px;">單位</span>
    </h4>
  </div>
  
  <ul>
    <li>
      Start(int delay)： delay → delay_secs
    </li>
    <li>
      CreateCache(int size)： size→size_mb
    </li>
    <li>
      ThrottleDownload(float limit)： limit → max_kbps
    </li>
    <li>
      Rotate(float angle)： angle → degrees_cw
    </li>
  </ul>
  
  <h4>
    <span style="font-size: 18px;">其他重要屬性</span>
  </h4>
  
  <div>
    <table style="border-collapse: collapse; table-layout: fixed;" border="1" width="100%" cellspacing="0" cellpadding="2">
      <tr>
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          情景
        </td>
        
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          變數名稱
        </td>
        
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          更好的名稱
        </td>
      </tr>
      
      <tr>
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          以「明文」儲存的密碼，應先加密
        </td>
        
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          password
        </td>
        
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          plaintext_password
        </td>
      </tr>
      
      <tr>
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          使用者提供的意見，顯示前須編碼
        </td>
        
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          comment
        </td>
        
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          unescpaed_comment
        </td>
      </tr>
      
      <tr>
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          轉換為 UTF-8 的 html 資料
        </td>
        
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          html
        </td>
        
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          html_utf8
        </td>
      </tr>
      
      <tr>
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          做過 url 編碼輸入資料
        </td>
        
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          data
        </td>
        
        <td style="padding: 10.0px; margin: 0.0px; border: 1.0px solid #d9d9d9;" colspan="1" rowspan="1" valign="top">
          data_urlenc
        </td>
      </tr>
    </table>
  </div>
  
  <ul>
    <li>
      小範圍 => 短名稱
    </li>
    <li>
      縮寫應被廣泛理解
    </li>
  </ul>
  
  <h3>
    <span style="font-size: 24px;">誤解</span>
  </h3>
  
  <ul>
    <li>
      不要使用 filter, 要用 select, exclude
    </li>
    <li>
      Clip 可以改為 truncate
    </li>
    <li>
      關於區間 <ul>
        <li>
          包含邊界：max / min
        </li>
        <li>
          閉區間：first / last
        </li>
        <li>
          半閉區間：begin / end
        </li>
      </ul>
    </li>
    
    <li>
      布林運算子可加上 is, has, can, should
    </li>
  </ul>
  
  <h3>
    程式碼越整齊越對齊越好
  </h3>
  
  <div>
    [ 註解的目的是幫助使用者了解程式碼作者的思想 ]
  </div>
  
  <ul>
    <li>
      好程式 > 壞程式 + 好註解
    </li>
    <li>
      記錄自己的想法——導演評註<br clear="none" /> <ul>
        <li>
          啟發式計算可能會漏幾個字，但很難 100% 解決
        </li>
        <li>
          這個 class 有點亂，或許可以建個子類別
        </li>
      </ul>
    </li>
    
    <li>
      記錄程式碼缺陷<br clear="none" /> <ul>
        <li>
          TODO
        </li>
        <li>
          FIXME
        </li>
        <li>
          HACK
        </li>
        <li>
          XXX
        </li>
      </ul>
    </li>
    
    <li>
      常數的註解<br clear="none" /> <ul>
        <li>
          // 只要…即可 → 讓讀者對常數的調整更有概念
        </li>
        <li>
          // 加上合理的限制——沒人能讀那麼多文章！ → 不加也可，加了不無小補助
        </li>
        <li>
          // 使用者認為 0.72 在大小/品質上有罪好的平衡 → 調校過後的結果
        </li>
      </ul>
    </li>
    
    <li>
      為讀者設想<br clear="none" /> <ul>
        <li>
          若可以預期讀者會有疑問，則可事先用註解回答他<br clear="none" />// 強制釋放記憶體（參看 STL swap trick）
        </li>
        <li>
          避免使用者誤用可加上「實做細節」<br clear="none" />// 呼叫外部服務發送 email （逾時時間為 1 min）
        </li>
        <li>
          可以加上時間複雜度<br clear="none" />// O(number_tags * average_tag_depth)
        </li>
      </ul>
    </li>
    
    <li>
      「全局註解」：讓新進成員在一段輕鬆的談話後，能比自行閱讀程式碼知道更多事
    </li>
    <li>
      摘要註解：用一句話解釋 what is &#8220;for 迴圈的內容" about :<br clear="none" />// 找出所有為自己購買商品的客戶 <pre>for(...)
    for(...)
        if(...)</pre>
    </li>
    
    <li>
      註解「為何」而非「什麼」or「如何」
    </li>
    <li>
      盡力幫助使用者理解程式碼
    </li>
    <li>
      寫下註解的步驟：<br clear="none" /> <ol>
        <li>
          寫下心中想法
        </li>
        <li>
          讀出註解
        </li>
        <li>
          改善
        </li>
      </ol>
    </li>
  </ul>
  
  <h3>
    <span style="font-size: 24px;">讓註解精確＆簡潔</span>
  </h3>
  
  <ul>
    <li>
      不說廢話冗詞
    </li>
    <li>
      避免模稜兩可的代名詞
    </li>
    <li>
      修正草率語句
    </li>
    <li>
      精確描述函數行為<br clear="none" /> <ul>
        <li>
          回傳檔案行數 → 回傳換行字元(&#8216;\n&#8217;)個數
        </li>
      </ul>
    </li>
    
    <li>
      使用具代表性的輸入/輸出範例
    </li>
    <li>
      表達程式意圖
    </li>
    <li>
      函數參數名稱註解 <ul>
        <li>
          <code>Connect(/* timeout_s = */ 10, /* use_encryption = */ false)</code>
        </li>
      </ul>
    </li>
    
    <li>
      使用「訊息密集」的詞彙<br clear="none" /> <ul>
        <li>
          cache layer
        </li>
        <li>
          正規化
        </li>
        <li>
          啟發式（heuristic）
        </li>
        <li>
          暴力法（Brute-force）
        </li>
        <li>
          naive solution
        </li>
      </ul>
    </li>
  </ul>
  
  <div>
    <hr />
  </div>
  
  <div>
  </div>
  
  <h2>
    <span style="font-size: 36px;">簡化迴圈與邏輯</span>
  </h2>
  
  <h3>
    <span style="font-family: verdana,helvetica,sans-serif; font-size: 24px;">提高控制流程的可讀性</span>
  </h3>
  
  <ul>
    <li>
      條件式中的條件順序：<br clear="none" />左側「較有變化」，右側為「比較基準」<br clear="none" />// 尤達表示法：我是時代的眼淚XD
    </li>
    <li>
      if/else 區塊順序<br clear="none" /> <ul>
        <li>
          先處理<strong>肯定</strong>而非<strong>否定</strong>
        </li>
        <li>
          先處理<strong>簡單</strong>的情況，以便同時顯示出 if 和 else 的區塊
        </li>
        <li>
          先處理比較有趣/明顯的情況
        </li>
      </ul>
    </li>
    
    <li>
      ? : 判斷式，有利有弊，視情況判斷
    </li>
    <li>
      不要用 do/while loop<br clear="none" /> <ul>
        <li>
          一般來說，判斷式都在區塊上方<br clear="none" />因為閱讀順序都是由上到下，用 do/while 有時候讓人需要讀兩次程式碼
        </li>
        <li>
          continue 會變得難以理解 <pre>do{
    continue;
} while(false);</pre>
          
          <p>
            // 上面的例子只會執行一次</li> 
            
            <li>
              C++ 之父也這麼說
            </li></ul> </li> 
            
            <li>
              儘早從函式 return<br clear="none" /> <ul>
                <li>
                  有些人會認為只應有一個 return，因為他想執行函式尾端的清除程式碼，<br clear="none" />但現代程式語言提供更成熟的機制：<br clear="none" /> <ul>
                    <li>
                      C++: 解構子
                    </li>
                    <li>
                      Java, Python: try finally
                    </li>
                    <li>
                      Python: with
                    </li>
                    <li>
                      C#: using
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            
            <li>
              goto 惡名昭彰，多數情況下都應避免
            </li>
            <li>
              減少巢狀結構<br clear="none" /> <ul>
                <li>
                  用 return 把失敗情況先處理掉
                </li>
                <li>
                  continue 也很好用，但要小心不要讓他變成迴圈內的 goto
                </li>
              </ul>
            </li>
            
            <li>
              修正程式碼時，要以全新的角度審視，退一步以整體的角度來考慮程式碼
            </li>
            <li>
              能否理解執行流程<br clear="none" /> <ul>
                <li>
                  在背景執行的 Tread
                </li>
              </ul>
            </li></ul> 
            
            <h3>
              <span style="font-size: 24px;">分解巨大表示式</span>
            </h3>
            
            <ul>
              <li>
                將巨大表示式分解為更容易消化的大小
              </li>
              <li>
                使用「解釋性變數」 → 軟工時老師用的抽取函式的概念，但此處包含但不限於函式
              </li>
              <li>
                摘要變數<br clear="none" />把一整串表示式放到變數中，用以解釋<br clear="none" />bool user_owns_doc = request.user.id == document.owner_id
              </li>
              <li>
                笛摩根定律： not 的分配律
              </li>
              <li>
                不要變成 short-circuit evaluation 魔人
              </li>
              <li>
                寫法「很酷」的程式碼會對後人造成困擾
              </li>
              <li>
                當遇到複雜的邏輯時，可以尋找更優雅的方式→可以從相反的方向去思考
              </li>
            </ul>
            
            <h3>
              <span style="font-size: 24px;">變數與可讀性</span>
            </h3>
            
            <h4>
              濫用變數
            </h4>
            
            <div>
              會有三個問題：
            </div>
            
            <ul>
              <li>
                變數越多越難同時記住全部
              </li>
              <li>
                lifetime 越長就必須記住越久
              </li>
              <li>
                值越常變，越難記得當前數值
              </li>
            </ul>
            
            <h3>
              <span style="font-size: 18px;">消除變數</span>
            </h3>
            
            <ul>
              <li>
                若有個變數只用一次、不複雜，甚至是對理解程式沒有幫助，就果斷拿掉他吧！    // 常是程式碼編輯後的「殘骸」
              </li>
              <li>
                消去中間結果。
              </li>
              <li>
                讓函式「儘快完成任務」是個好習慣
              </li>
              <li>
                善加利用結構化程式設計來消除控制流程變數
              </li>
            </ul>
            
            <h4>
              <span style="font-size: 18px;">限縮變數的範圍</span>
            </h4>
            
            <ul>
              <li>
                儘可能減少「可以看到變數」的程式碼行數
              </li>
              <li>
                In some way, 類別的成員變數就是類別內部的全域變數 <ul>
                  <li>
                    盡量讓成員變數退化成區域變數
                  </li>
                  <li>
                    需要限制類別成員存取權→盡量使用靜態方法 (static method)
                  </li>
                  <li>
                    將大類別縮成小類別（小類別間須互相獨立，互不干涉，否則沒有效果）
                  </li>
                  <li>
                    主要動機就是隔離資料，也就是變數
                  </li>
                  <li>
                    下移宣告，讓變數與函式在第一次使用前才出現
                  </li>
                </ul>
              </li>
              
              <li>
                偏好單次寫入的變數→操作變數的地方越多，就越難記得當前數值
              </li>
            </ul>
            
            <div>
              <hr />
            </div>
            
            <div>
            </div>
            
            <h2>
              <span style="font-size: 36px;">重新組織程式碼</span>
            </h2>
            
            <h3>
              <span style="font-size: 18px;">積極尋找並抽離不相關的子問題</span>
            </h3>
            
            <ul>
              <li>
                當想著「要是 Lib 有提供 xyz() 函式就好了」的時候，就動手做一個
              </li>
              <li>
                抽出程式碼之後有意外好處：更容易理解，也更容易改善可靠度、加入新功能、處理邊界值
              </li>
              <li>
                通用程式碼的好處就是可以用在各個專案（一般會放在 util/ 目錄之下 ）
              </li>
              <li>
                就算抽出的問題和專案相關也無妨，有抽出來就是好事
              </li>
              <li>
                永遠不必屈就於不夠好的 interface，你可以自行幫他整形，甚至重塑界面，避免被細節干擾
              </li>
            </ul>
            
            <h3>
              <span style="font-size: 18px;">一次只做一項工作</span>
            </h3>
            
            <h3>
              <span style="font-size: 18px;">將想法轉為程式碼</span>
            </h3>
            
            <ul>
              <li>
                清楚描述邏輯→前面提過的簡化迴圈
              </li>
              <li>
                善用函式庫所提供的協助
              </li>
            </ul>
            
            <h3>
              <span style="font-size: 18px;">程式碼越少越好</span>
            </h3>
            
            <ul>
              <li>
                可讀性最高的程式碼就是完全沒有程式碼
              </li>
              <li>
                有些功能非必要，就不用開發
              </li>
              <li>
                詢問與分解需求→可以事半功倍
              </li>
              <li>
                維持程式碼小而美<br clear="none" /> <ul>
                  <li>
                    建立通用程式碼
                  </li>
                  <li>
                    移除用不到的程式碼與功能
                  </li>
                  <li>
                    將專案切成不相連的子專案
                  </li>
                  <li>
                    注意程式的份量，維持其輕巧
                  </li>
                </ul>
              </li>
              
              <li>
                熟悉使用的函式庫
              </li>
              <li>
                用 Unix 工具來代替撰寫程式
              </li>
            </ul>
            
            <h2>
              <span style="font-size: 36px;">測試與可讀性</span>
            </h2>
            
            <ul>
              <li>
                讓測試易讀與維護
              </li>
              <li>
                對使用者隱藏不重要的系解，突顯重要的細節 <ul>
                  <li>
                    測試敘述最小化
                  </li>
                  <li>
                    自製迷你語言、爬蟲 → 個人覺得有點走火入魔了… 但可以理解為什麼這麼做
                  </li>
                  <li>
                    手工打造錯誤訊息
                  </li>
                </ul>
              </li>
              
              <li>
                選擇良好的測資：優先使用簡單、明確但仍能達到測試效果的輸入值
              </li>
              <li>
                test-friendly 的開發：單單在寫程式時考慮到測試，就能讓程式碼有很大的改善
              </li>
            </ul></div>