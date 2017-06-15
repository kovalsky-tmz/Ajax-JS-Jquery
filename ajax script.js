    <script type="text/javascript">
    
    function ajax(){
        if (typeof XMLHttpRequest == "undefined") {
            XMLHttpRequest = function() {
                return new ActiveXObject(
                    navigator.userAgent.indexOf("MSIE 5") >=0 ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP"
                );
            }
        }
        
        var xml = new XMLHttpRequest();
        xml.open("GET",'script.php', true);
        
        xml.onreadystatechange = function(){
            if ( xml.readyState == 4  && xml.status == 200) {
                //code
            }else{
                // code
            }
        };
        xml.send();
    }
    </script>