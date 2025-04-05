'use client';

import { useEffect, useRef, useState } from "react";

interface Section {
    id: string
    title: string
  }
  
  const sections: Section[] = [
    { id: "section1", title: "Section 1" },
    { id: "section2", title: "Section 2" },
    { id: "section3", title: "Section 3" },
    { id: "section4", title: "Section 4" },
  ]

const page = () => {
    const [activeSection, setActiveSection] = useState<string>("");
    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);
    const ref3 = useRef<HTMLDivElement | null>(null);
    const ref4 = useRef<HTMLDivElement | null>(null);

  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.5 },
      )
  
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) observer.observe(element)
      })
  
      return () => observer.disconnect()
    }, [])
  
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            width: "16rem",
            height: "100vh",
            position: "sticky",
            top: 0,
            overflowY: "auto",
            padding: "1rem",
            backgroundColor: "#f3f4f6",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {sections.map((section) => (
              <li key={section.id} className="mb-[0.5rem]">
                <a
                  href={`#${section.id}`}
                  style={{
                    display: "block",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    transition: "background-color 0.3s, color 0.3s",
                    backgroundColor: activeSection === section.id ? "#3b82f6" : "transparent",
                    color: activeSection === section.id ? "white" : "black",
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1 p-[2rem]">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-red-500"
              style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <h2 style={{ fontSize: "2.25rem", fontWeight: "bold" }}>{section.title}</h2>
            </section>
          ))}
        </div>
      </div>
    )
}

export default page;