<!-- Fonksiyonumuzda kullanmak üzere gerekli değişkenleri oluşturuyoruz. -->
    var _id; var _adi; var _soyadi; var _telefon; var _email;

    // JSON çek adında bir method oluşturuyoruz. Bu methodumuzu sayfa yüklendiğinde çağırmak için sitemizin body kısmının onload'ına tanımlıyoruz. <body onload="JSONCEK()">
    function JSONCEK() {

        //getJSON Methodunu kullanarak verimizi çekiyoruz. GetJSON methodu bizden datamızın adresini isteyecektir. Bu method vermiş olduğumuz adresden datayı çekerek fonksiyon olarak tanımladığımız data dizinine atar.
        $.getJSON("assets/kaltura.json", function (data) {

            //Şimdi JSON datalarımızı atamış olduğumuz data fonksiyonun içerisinde for döngüsü ile dönerek tüm datalara ulaşabilirsiniz. 
            //data.length() metodu ile gelen datanın length kadar dönebilir veya benim gibi datayı siz oluşturduğunuz için direk sayı yazabilirsiniz.
            for (var i = 0; i < 3; i++) {

                //Tüm değerleri sırasıyla belirlediğim değişkene atıyorum.
                //Data yı değişkene atama esnasında değişken fonksiyonu sizden 3 şey ister 1) JSON Listenizin adı ["Rehberim"] 2) Atamak istediğiniz JSON dizinin numarası [i] 3) Atamak istediğiniz datanın adı ['ID']
                _id = data["Rehberim"][i]['ID'];
                _adi = data["Rehberim"][i]['Adi'];
                _soyadi = data["Rehberim"][i]['Soyadi'];
                _telefon = data["Rehberim"][i]['Telefon'];
                _email = data["Rehberim"][i]['Email'];

                //Burdan sonrası sizin yapmayı planladığınız programa göre değişir ben atadım en son JSON datalarını Label'a yazdırarak programımı tamamlıyorum.
                document.getElementById('lbl_ID').innerHTML = _id;
                document.getElementById('lbl_Ad').innerHTML = _adi;
                document.getElementById('lbl_SoyAd').innerHTML = _soyadi;
                document.getElementById('lbl_Tel').innerHTML = _telefon;
                document.getElementById('lbl_Mail').innerHTML = _email;
           }
        });
    }