<iaixsl:if test="contains(/shop/navigation/current/@curr_url, '%2Fidomods')"> 
    <iaixsl:value-of select="/shop/@baseurl"></iaixsl:value-of> 
 </iaixsl:if> 


 <iaixsl:when test="/shop/page/@type = 'blog-list'">
    <title>
        Blog - Strona <iaixsl:value-of select="/shop/page/blogitems/navigation/item[@type='current']/@counter"/> – SOLLUX
    </title>
</iaixsl:when>


<!-- linki -->
  <a href="{item/@link}" class="socialProof_left__content">
    <div>  
    </div>
</a>


<!-- literal -->

              <div class="product__promotion">
                     <iai:variable class="product__promotion" vid="PROMOCJA"/>
              </div>

<!-- warunek -->
    <iaixsl:if test="@ni != '360' and @ni != '1892'">
                <iaixsl:text disable-output-escaping="yes"><![CDATA[ rel="nofollow"]]></iaixsl:text>
     </iaixsl:if>

<!-- dodawanie parametrów do elementu  -->
       <div class="product__buy-section" data-id="67186">
           <iaixsl:attribute name="data-id">
                <iaixsl:value-of select="@id"></iaixsl:value-of>
           </iaixsl:attribute>
       </div>

<!-- warunek -->

       <iaixsl:when test="not(position() = last()) and /shop/navigation//item[@ni = $current_ni]/@link">
                        <a>
                          <iaixsl:attribute name="href"><iaixsl:value-of select="@link"/></iaixsl:attribute>
                          <iaixsl:value-of disable-output-escaping="yes" select="@title"/>
                        </a>
                      </iaixsl:when>

 <iaixsl:if test="page/@type != 'login'">

   </iaixsl:if>


      <iaixsl:when test="page/@type = 'login'">
            <iaixsl:if test="page/login/response/@type = 'give login'">
              <li>
                <iaixsl:attribute name="class"><![CDATA[bc-active bc-]]><iaixsl:value-of select="page/@type"/></iaixsl:attribute>
                <span><iai:variable vid="Przypomnij hasło"/></span>
              </li>
            </iaixsl:if>
            <iaixsl:if test="not(page/login/response/@type = 'give login')">
              <iaixsl:choose>
                <iaixsl:when test="/shop/basket/@login">
                  <li>
                    <iaixsl:attribute name="class"><![CDATA[bc-active bc-]]><iaixsl:value-of select="page/@type"/></iaixsl:attribute>
                    <span><iai:variable vid="Twoje konto"/></span>
                  </li>
                </iaixsl:when>
                <iaixsl:when test="page/login/response/@type = 'no login'">
                  <li>
                    <iaixsl:attribute name="class"><![CDATA[bc-active bc-]]><iaixsl:value-of select="page/@type"/></iaixsl:attribute>
                    <span><iai:variable vid="Logowanie"/></span>
                  </li>
                </iaixsl:when>
              </iaixsl:choose>
            </iaixsl:if>
          </iaixsl:when>
          

strzałka
            <li>
                  <iaixsl:attribute name="class"><![CDATA[bc-active bc-]]><iaixsl:value-of select="page/@type"/></iaixsl:attribute>
                  <span></span>
                </li>