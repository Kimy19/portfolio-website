import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle';

export default function Header(){
    return(
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" stroke-strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </Link>
                    
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-gray-900">
                            홈
                        </Link>
                        <Link href="/projects" className="mr-5 hover:text-gray-900">
                            프로젝트
                        </Link>
                        <Link href="/projects" className="mr-5 hover:text-gray-900">
                            연락하기
                        </Link>

                    </nav>
                    <DarkModeToggleButton/>
                    {/* 다크모드 토글버튼 */}
                </div>
            </header>
        </>
    )
}