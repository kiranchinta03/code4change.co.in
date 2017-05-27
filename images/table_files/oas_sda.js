//configuration
OAS_build = document.location.toString().replace(/http:\/\//,"").split("/");
OAS_build_str = "";
for(i=1;i<OAS_build.length;i++) {
        OAS_build_str += OAS_build[i] + "/";
} 

OAS_sitepage = 'intm/it/www.databasejournal.com/sqlcourse1/' + OAS_build_str;
OAS_listpos = 'house_ribbon,flex,125x125-1,336x280-2,468x60-1,ciu,cp1,cp10,cp11,cp12,cp13,cp14,cp2,cp3,cp4,cp5,cp6,cp7,cp8,cp9,marketplace01,marketplace02,marketplace03,marketplace04,marketplace05,marketplace06,marketplace07,marketplace08,marketplace09,marketplace10';
OAS_query = '';
OAS_target = '_top';
//end of configuration

OAS_version = 10;
OAS_rn = '001234567890'; OAS_rns = '1234567890';
OAS_rn = new String (Math.random()); OAS_rns = OAS_rn.substring (2, 11);

function OAS_NORMAL(pos) {
    document.write('<a href="' + OAS_url + 'click_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" target="' + OAS_target + '">'); 
    document.write('<img src="' + OAS_url + 'adstream_nx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + '?' + OAS_query + '" border="0"></a>'); 
}

OAS_version = 11;   
if ((navigator.userAgent.indexOf('Mozilla/3') != -1) || (navigator.userAgent.indexOf('Mozilla/4.0 WebTV') != -1))  
OAS_version = 10;
if (OAS_version >= 11) {
    var_aaa=('<script type="text/javascript" language="javascript" src="' + OAS_url);
    var_bbb=(var_aaa + 'adstream_mjx.ads/' + OAS_sitepage + '/1');
    var_ccc=(var_bbb + OAS_rns + '@' + OAS_listpos + '?' + OAS_query );
    var_ddd=(var_ccc + '"><\/script>');
    document.write(var_ddd);
} 

document.write('');  

function OAS_AD(pos) {  
if (OAS_version >= 11)  
OAS_RICH(pos);  
else 
OAS_NORMAL(pos);  
}