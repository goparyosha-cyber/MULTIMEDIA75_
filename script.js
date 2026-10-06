const H="e0d0d5e301b8904986c53be3f9fd0e56c2a347e8d4b270d3371cfacd34406c44";
const names="ABIGAIL AUDRIE AZKIA|Adelia Kirana Putri|Aditya Hugo Filio|Allysia Celmira Azmi|Arzanik Kazuo Andriputra|Azka Aulia Rahman|Callia Anindya Kurniawan|Darren Ramadhan Ishak|Dzakiyya Raksi Kayana Putri|Emily Khairin Aqila|Faeyza Nabil Azmi|Fathir Al Rasyid Nasution|Fathir Athalla Malik|Fathur Rizky Annawafi|Ghaniyya Syarafana Jenahara|Gilang Ramadhan Pratama|HELGAROSA BILQIS SALAM|Husnia Lituhayu Azzafira|IMAM CHOIRUDIN|Muhammad Faeyza Raya Devdan|Muhammad Sakha Hifdzul Fareza|Muhammad Zaki Pratama|Nabila Sandra Gunadarma|Queenaylla Callysta Gyani Azura|Rayyan Alfarizi Priyambodo|Shafiyya Nurprima Aziz|Zalfa Naqiyya Syarif|Zean Carlzeiss Maphilindo".split("|");
const praise=[["Kelas paling aktif","Guru-guru"],["Keren banget.","siswa siswa"],["Desain kalian bagus banget.","kelas sebelah"],["Anak 7.5 tuh beda, auranya juara.","Kelas sebelah"],["Kerja timnya rapi, hasilnya keren.","Wali kelas"],["Suatu hari nama kelas ini bakal jadi legenda.","Seisi sekolah"],["siswa paling keren.","IPM"]];
const $=id=>document.getElementById(id);let T=[];
function show(n){document.querySelectorAll('.s').forEach(e=>e.classList.remove('on'));$('s'+n).classList.add('on');if(n==2)build();if(n==4)loud();if(n==5)hype();if(n==6)T.push(setTimeout(()=>show(7),3500))}
function build(){const g=$('grid');g.innerHTML='';$('cnt').textContent=names.length+' siswa hebat';names.forEach((x,i)=>{const d=document.createElement('div');d.className='n';d.style.animationDelay=i*40+'ms';d.innerHTML='<i>'+String(i+1).padStart(2,'0')+'</i>'+x;g.appendChild(d)})}
function loud(){const b=$('bar');b.style.transition='none';b.style.width='0';setTimeout(()=>{b.style.transition='width 5s linear';b.style.width='100%'},50);T.push(setTimeout(()=>show(5),5000))}
function hype(){const p=$('praise');let i=0;p.innerHTML='';(function nx(){if(i>=praise.length){T.push(setTimeout(()=>show(6),1800));return}const [t,w]=praise[i++];p.innerHTML='<div class="pop">“'+t+'”<small>— '+w+'</small></div>';T.push(setTimeout(nx,2600))})()}
async function sha(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
async function login(){const v=$('pw').value.trim();let ok=false;try{ok=(await sha(v))===H}catch(e){ok=v==="MM75WIN"}
if(ok){show(1)}else{$('err').textContent='Pass salah! Akses ditolak ✖';const s=$('s0');s.classList.remove('shake');void s.offsetWidth;s.classList.add('shake');$('pw').value=''}}
$('go').onclick=login;$('pw').onkeydown=e=>{if(e.key==='Enter')login()};
document.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>show(b.dataset.n));
$('re').onclick=()=>{T.forEach(clearTimeout);show(1)};
// bintang background
const c=$('c'),x=c.getContext('2d');let P=[];function rs(){c.width=innerWidth;c.height=innerHeight;P=Array.from({length:70},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2+.5,v:Math.random()*.4+.1}))}
rs();addEventListener('resize',rs);(function d(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.y-=p.v;if(p.y<0){p.y=c.height;p.x=Math.random()*c.width}x.fillStyle='rgba(47,123,255,'+(.3+p.r/4)+')';x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()});requestAnimationFrame(d)})();
