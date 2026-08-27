import React, { useEffect, useRef } from 'react';
import './cursor.css'; // 커서 스타일을 적용하기 위해 CSS 파일을 import 합니다.

function UserCard() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // 마우스 이동 시 커서 좌표를 마우스 위치로 이동
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 메뉴 링크에 마우스가 올라갔을 때 (커서 확대 + 글자 색상/점선 변경)
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cursorRef.current) {
      cursorRef.current.classList.add('cursor-grow');
    }
    e.currentTarget.classList.add('hovered-link');
  };

  // 메뉴 링크에서 마우스가 벗어났을 때 (원상복구)
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cursorRef.current) {
      cursorRef.current.classList.remove('cursor-grow');
    }
    e.currentTarget.classList.remove('hovered-link');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Playground', href: '#playground' },
  ];

  return (
    <div className="card">
      {/* 1. 시스템 커서를 대체할 커스텀 커서 */}
      <div ref={cursorRef} className="cursor"></div>

      <header>
        <nav>
          <ul className="gnb">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: link.name === 'Home' ? 'var(--color-textd)' : undefined }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

function UserCard2() {
  return (
    <div className="card mt-30 ">
      <div className="w-full bg-gray-300 justify-center items-center text-center">
        <div className='text-center'>開発しております。</div>
        <h3>工事中</h3>
        <p>Testingしているコンポネントです。</p>
      </div>
      <div className='grid grid-cols-4'>
        <div className='w-full bg-red-500 h-30 hover:bg-red-700'></div>
        <div className='w-full bg-green-500 h-30 hover:bg-green-700'></div>
        <div className='w-full bg-blue-500 h-30 hover:bg-blue-700'></div>
        <div className='w-full bg-yellow-500 h-30 hover:bg-yellow-700'></div>
      </div>
      <div className='bg-grey-500 h-30 hover:bg-black'>
        ddd
        <span className='text-white'>daw ddd</span>

      </div>
      <div className='rounded-full border h-30 bg-red-500 flex items-center justify-center mb-4 m-2' > dadawd</div>
    </div>
  );
}

// 2. 다른 파일에서 사용할 수 있도록 export 해줍니다.
export { UserCard, UserCard2 };
