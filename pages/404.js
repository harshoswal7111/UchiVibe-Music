import React from 'react';

export default function Custom404() {
  return (
    <div className="pointer-events-none fixed top-[1vh] right-0 z-[99] w-full md:top-0">
      <header className="flex items-center justify-center border-b border-black">
        <div className="border-[#00220b] text-[5vh] text-[#00220b] lg:text-[15vh]">
          <div className="border-r border-forrestGreen [&>*]:border-forrestGreen">
            <div className="bg-[#ea366f] p-4">
              <img src="/static/uchi_logo.png" alt="UchiVibe Logo" className="w-full h-auto" />
            </div>
            <div className="flex h-full flex-col items-center justify-center border-t p-4 font-semibold uppercase text-[#08b4c2] text-lg md:normal-case md:text-5xl">
              MUSIC FOR THE SOUL
            </div>
          </div>
        </div>
      </header>
      <div style={{color:'#000', background:'#fff', fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif', height:'100vh', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <div>
          <style jsx>{`body { margin: 0 }`}</style>
          <h1 style={{display:'inline-block', borderRight:'1px solid rgba(0, 0, 0,.3)', margin:0, marginRight:20, padding:'10px 23px 10px 0', fontSize:24, fontWeight:500, verticalAlign:'top'}}>
            404
          </h1>
          <div style={{display:'inline-block', textAlign:'left', lineHeight:'49px', height:49, verticalAlign:'middle'}}>
            <h2 style={{fontSize:14, fontWeight:'normal', lineHeight:'49px', margin:0, padding:0}}>
              This page could not be found.
            </h2>
          </div>
        </div>
      </div>
      <footer className="w-full gap-4 border-t border-forrestGreen bg-babyBlue uppercase">
        <div style={{backgroundSize:'1.5vmin 1.5vmin'}} className="h-full min-h-[20px] w-full bg-forrestGreen bg-[url('/static/checker.svg')] bg-[length:1vim_1vim] md:inline-block"></div>
        <div className="flex w-full items-center gap-4 [&>*]:border-forrestGreen">
          <a className="flex pl-2 text-7xl" href="mailto:info@uchivibe.com">info@uchivibe.com</a>
          <div className="flex items-baseline gap-1 border-l px-4 py-4 font-semibold text-xs">
            <div>© </div>
            <div><span className="inline md:block">2025 UchiVibe Music.</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}