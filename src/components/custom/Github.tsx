"use client";

import React from 'react'
import GitHubCalendar from 'react-github-calendar';

export default function Github() {
  return (
    <section>
        <GitHubCalendar
        username='isayanpal'
        blockSize={10}
        blockMargin={3}
        theme={{
            light: ["#f3f4f6", "#fecaca", "#f87171", "#ef4444", "#b91c1c"],
            dark: ["#27272a", "#fecaca", "#f87171", "#ef4444", "#b91c1c"],
          }}        
        fontSize={12}
        />
    </section>
  )
}

