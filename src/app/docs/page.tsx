'use client';
import React, { useState } from 'react';

const GanglionDocumentation = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 font-share-tech">
      {/* Header */}
      <header className="flex justify-between items-center pb-6 border-b border-border">
        <h1 className="text-3xl font-bold glow-effect">OpenBCI Ganglion Documentation</h1>
        <button
          onClick={toggleDarkMode}
          className="py-2 px-4 rounded-md bg-primary text-primary-foreground hover:opacity-80 glow-effect"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      {/* Navigation */}
      <nav className="flex gap-6 mt-6 text-lg font-medium">
        <a href="#overview" className="hover:text-primary glow-effect">Overview</a>
        <a href="#getting-started" className="hover:text-primary glow-effect">Getting Started</a>
        <a href="#connecting-yourself" className="hover:text-primary glow-effect">Connecting Yourself</a>
        <a href="#troubleshooting" className="hover:text-primary glow-effect">Troubleshooting</a>
      </nav>

      {/* Sections */}
      <main className="mt-8 space-y-10">
        {/* Overview */}
        <section id="overview">
          <h2 className="text-2xl font-semibold mb-4 glow-effect">Overview</h2>
          <p className="leading-relaxed">
            This guide will walk you through setting up your Ganglion, connecting it to your computer, and connecting it to yourself for biosignal measurements. Please review this guide entirely before starting and consult the Ganglion Biosensing Tutorial Video.
          </p>
        </section>

        {/* Getting Started */}
        <section id="getting-started">
          <h2 className="text-2xl font-semibold mb-4 glow-effect">Getting Started</h2>
          <details className="mb-4">
            <summary className="cursor-pointer text-lg font-medium glow-effect">What’s in the Box?</summary>
            <ul className="mt-2 pl-6 list-disc space-y-2">
              <li>OpenBCI Ganglion Board</li>
              <li>Ganglion Dongle</li>
              <li>6V AA battery pack and 4 AA batteries</li>
              <li>Plastic feet for board stabilization</li>
              <li>Electrode cables and Gold Cup Electrodes</li>
            </ul>
          </details>
          <details>
            <summary className="cursor-pointer text-lg font-medium glow-effect">System Requirements</summary>
            <ul className="mt-2 pl-6 list-disc space-y-2">
              <li>Windows 10+, macOS 10.13+, or Linux</li>
              <li>OpenBCI GUI</li>
              <li>Bluetooth LE or USB dongle</li>
            </ul>
          </details>
        </section>

        {/* Connecting Yourself */}
        <section id="connecting-yourself">
          <h2 className="text-2xl font-semibold mb-4 glow-effect">Connecting Yourself</h2>
          <details>
            <summary className="cursor-pointer text-lg font-medium glow-effect">View ECG/EKG Signals</summary>
            <p className="mt-2 leading-relaxed">
              Attach electrodes to your arms and elbow. Set the switches to the UP position (default), and connect the cables to the Ganglion as follows:
            </p>
            <ul className="pl-6 list-disc space-y-2">
              <li>Grey: D_G (bottom pin)</li>
              <li>Purple: 3+ (top 3 pin)</li>
              <li>White: 3- (bottom 3 pin)</li>
            </ul>
          </details>
          <details>
            <summary className="cursor-pointer text-lg font-medium glow-effect">View EMG Signals</summary>
            <p className="mt-2 leading-relaxed">
              Place additional electrodes on your right wrist and observe muscle activity in the GUI by flexing your wrist.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer text-lg font-medium glow-effect">View EEG Signals</summary>
            <p className="mt-2 leading-relaxed">
              Adjust the input switches to the DOWN position for EEG. Connect 6 electrodes following the 10-20 system map to measure brain activity.
            </p>
          </details>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting">
          <h2 className="text-2xl font-semibold mb-4 glow-effect">Troubleshooting</h2>
          <details className="mb-4">
            <summary className="cursor-pointer text-lg font-medium glow-effect">Connection Issues</summary>
            <p className="mt-2">
              Ensure Bluetooth or the dongle is connected properly. Restart the Ganglion and GUI if issues persist.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer text-lg font-medium glow-effect">Signal Quality</summary>
            <p className="mt-2">
              Verify electrode placement, use conductive gel, and minimize environmental noise for optimal results.
            </p>
          </details>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center border-t border-border pt-6">
        <p>© 2025 OpenBCI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GanglionDocumentation;
