import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState, Suspense } from 'react';
import { MdLeaderboard } from 'react-icons/md';
import { LuRefreshCw, LuUndo2, LuEraser, LuLightbulb, LuSettings, LuCircleHelp } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';
import { handleGithub, handleHowToPlay, handleSettings } from './extraHandlers';
import { ProfileModal } from './profileModal';
import './UI.css';

function CubeModel() {
    const { scene } = useGLTF('/cube.glb');
    return <primitive object={scene} />;
}

function CubeViewer() {

    const [selectedNumber, setSelectedNumber] = useState<number | 'eraser' | null>(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const handleEraserSelect = () => {
        if (selectedNumber != 'eraser') {
            setSelectedNumber('eraser');
        }
        else {
            setSelectedNumber(null);
        }
    }

    const handleNumberSelect = (number: number) => {
        if (selectedNumber != number) {
            setSelectedNumber(number);
        }
        else {
            setSelectedNumber(null);
        }
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#0A0A0A'
        }}>
            {/* Top Bar */}
            <div className="top-bar">
                <button className="icon-button leaderboard-btn">
                    <MdLeaderboard size={20} />
                    <span>Leaderboard</span>
                </button>
                <button className="icon-button restart-btn">
                    <LuRefreshCw size={20} />
                    <span>Start Over</span>
                </button>
                <h1 style={{ alignItems: 'center' }}>3D Sudoku Viewer</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
                    <p hidden>00:00</p>
                    <img src="profile.svg" alt="Profile" className="profile-icon" onClick={() => { setIsProfileOpen(!isProfileOpen) }} />
                </div>
            </div>
            <ProfileModal className="profile-modal" isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)}
            />
            {/* Right Floating Panel */}
            {/* Right Floating Panel - Numbers */}
            <div className="right-panel">
                <h2>Numbers</h2>
                <div className="number-grid">
                    <button className={`number-btn ${selectedNumber === 1 ? 'selected' : ''}`} onClick={() => handleNumberSelect(1)}>1</button>
                    <button className={`number-btn ${selectedNumber === 2 ? 'selected' : ''}`} onClick={() => handleNumberSelect(2)}>2</button>
                    <button className={`number-btn ${selectedNumber === 3 ? 'selected' : ''}`} onClick={() => handleNumberSelect(3)}>3</button>
                    <button className={`number-btn ${selectedNumber === 4 ? 'selected' : ''}`} onClick={() => handleNumberSelect(4)}>4</button>
                    <button className={`number-btn ${selectedNumber === 5 ? 'selected' : ''}`} onClick={() => handleNumberSelect(5)}>5</button>
                    <button className={`number-btn ${selectedNumber === 6 ? 'selected' : ''}`} onClick={() => handleNumberSelect(6)}>6</button>
                    <button className={`number-btn ${selectedNumber === 7 ? 'selected' : ''}`} onClick={() => handleNumberSelect(7)}>7</button>
                    <button className={`number-btn ${selectedNumber === 8 ? 'selected' : ''}`} onClick={() => handleNumberSelect(8)}>8</button>
                    <button className={`number-btn ${selectedNumber === 9 ? 'selected' : ''}`} onClick={() => handleNumberSelect(9)}>9</button>
                </div>
            </div>

            {/* Right Floating Panel 2 - Actions */}
            <div className="right-panel-2">
                <h2>Actions</h2>
                <div className="action-buttons">
                    <button className="action-btn" title="Undo">
                        <LuUndo2 size={20} />
                    </button>
                    <button className={`action-btn ${selectedNumber === 'eraser' ? 'selected' : ''}`}
                        onClick={handleEraserSelect}
                        title="Erase"
                    >
                        <LuEraser size={20} />
                    </button>
                    <button className="action-btn" title="Hint">
                        <LuLightbulb size={20} />
                    </button>
                </div>
            </div>
            {/* Bottom Left Floating Panel */}
            <div className="bottom-left-panel">
                <div className="extra-buttons">
                    <button className="extra-btn" title="Settings" onClick={handleSettings}>
                        <LuSettings size={20} />
                    </button>
                    <button className="extra-btn" title="GitHub" onClick={handleGithub}>
                        <FaGithub size={20} />
                    </button>
                    <button className="extra-btn" title="How to Play" onClick={handleHowToPlay}>
                        <LuCircleHelp size={20} />
                    </button>
                </div>
            </div>

            {/* 3D Canvas */}
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                <Suspense fallback={null}>
                    <CubeModel />
                </Suspense>
                <OrbitControls
                    enableDamping
                    dampingFactor={0.05}
                    rotateSpeed={0.5}
                    enablePan={false}
                />
            </Canvas>
        </div >
    );
}

export default CubeViewer;
