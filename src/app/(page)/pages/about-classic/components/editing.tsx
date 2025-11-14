'use client'
import React, { useState, useRef } from 'react'
import { CSSProperties } from 'react'; // Import CSSProperties for style objects

// --- 1. Define Core Types ---

type CommentType = 'editorial' | 'scientific';

interface Comment {
  type: CommentType;
  text: string;
}

interface HighlightedComment extends Comment {
  sectionId: string;
  commentIndex: string;
  targetSectionId: string;
}

interface SimpleMarkupEdit {
  type: 'suggest' | 'delete';
  old?: string; // only for 'suggest' or 'delete'
  new?: string; // only for 'suggest'
  text?: string; // only for 'delete'
}

interface SimpleMarkupPart {
  text: string;
  edits?: SimpleMarkupEdit[];
}

interface AllMarkupPart {
  text: string;
  type?: 'edited' | 'addition' | 'deletion';
}

interface Section {
  id: string;
  heading: string;
  original: string[];
  simpleMarkup: SimpleMarkupPart[];
  allMarkup: AllMarkupPart[];
  comments: Comment[];
}

interface SampleData {
  title: string;
  sections: Section[];
}

// --- 2. Main Component ---

export default function EditingSamples() {
  const [activeTab, setActiveTab] = useState<'original' | 'simple' | 'all'>('original')
  // The index is a string combining section and comment index
  const [activeCommentIndex, setActiveCommentIndex] = useState<string | null>(null)
  // Ref for the scrollable content container
  const contentRef = useRef<HTMLDivElement>(null)
    
  
  const sampleData: SampleData = {
    // ... (Your sampleData object remains the same)
    title: "An Analysis of Repair by a Nerve Connector as an Alternative for Direct Repair in Peripheral Nerve",
    sections: [
      {
        id: 'intro',
        heading: 'Introduction',
        original: [
          "Nerve injuries impose a heavy burden on patients' quality of life. Though direct epineurium and perineurium sutures are the classic techniques most commonly used for peripheral nerve injury, they are often accompanied with undesirable tension and their surgical outcomes are less than satisfactory. Such could be due to misalignments such as miss direction, overlapping and buckling of axons, ingrowth of scar tissue into the repair site and tension-induced ischemia around the stumps, all leading to poor fascicular coaptation. To overcome these problems, several newer technologies such as connector repair have been considered."
        ],
        // SIMPLE MARKUP (Now used for 'All Markup' tab)
        simpleMarkup: [
          
          { text: "Nerve injuries", edits: [{ type: 'suggest', old: 'impose', new: 'can impose' }] },
          { text: " a heavy burden on patients' quality of life. Although direct epineurial and perineurial sutures are commonly used for peripheral nerve injury, they are often accompanied by undesirable tension and their surgical outcomes " },
          { text: "can be less", edits: [{ type: 'suggest', old: 'are less', new: 'can be less' }] },
          { text: " than satisfactory." },
          { text: " These sutures can cause axon", edits: [{ type: 'suggest', old: 'Such could be due to', new: 'These sutures can cause axon' }] },
          { text: " misalignments (such as misdirection, overlapping, and buckling)" },
          { text: ", scar tissue ", edits: [{ type: 'delete', text: 'of axons, ingrowth of' }] },
          { text: "ingrowth", edits: [{ type: 'suggest', old: 'ingrowth of scar tissue', new: 'ingrowth' }] },
          { text: " into the repair site, " },
          { text: "or", edits: [{ type: 'suggest', old: 'and or', new: 'or' }] },
          { text: " tension-induced ischemia around the stumps, " },
          { text: "all of which can", edits: [{ type: 'suggest', old: 'all', new: 'all of which can' }] },
          { text: " lead to poor fascicular coaptation. To overcome these problems, several newer " },
          { text: "methods", edits: [{ type: 'suggest', old: 'technologies', new: 'methods' }] },
          { text: ", such as connector repair, have been considered." }
        ],
        // ALL MARKUP (Now used for 'Simple Markup' tab)
        allMarkup: [
          { text: "Nerve injuries ", type: 'edited' },
          { text: "can impose", type: 'addition' },
          { text: " a heavy burden on patients' quality of life. ", type: 'edited' },
          { text: "Although", type: 'addition' },
          { text: " direct epineurial and perineurial sutures are commonly used for peripheral nerve injury, they are often accompanied ", type: 'edited' },
          { text: "by", type: 'addition' },
          { text: " undesirable tension and their surgical outcomes ", type: 'edited' },
          { text: "can be", type: 'addition' },
          { text: " less than satisfactory. ", type: 'edited' },
          { text: "These sutures can cause axon", type: 'addition' },
          { text: " misalignments (such as misdirection, overlapping, and buckling)", type: 'edited' },
          { text: ", scar tissue ", type: 'edited' },
          { text: "ingrowth", type: 'addition' },
          { text: " into the repair site, ", type: 'edited' },
          { text: "or", type: 'addition' },
          { text: " tension-induced ischemia around the stumps, ", type: 'edited' },
          { text: "all of which can", type: 'addition' },
          { text: " lead to poor fascicular coaptation. To overcome these problems, several newer ", type: 'edited' },
          { text: "methods", type: 'addition' },
          { text: ", such as connector repair, have been considered.", type: 'edited' }
        ],
        comments: [
          {
            type: 'editorial',
            text: 'Your paper has been edited according to the requirements of your target journal and per your preference for US English.'
          },
          {
            type: 'scientific',
            text: 'While it is acceptable and common practice to discuss things like the "global disease burden" on a population level, avoiding the phrase "burden" is recommended with regard to specific patients or the impact of an illness on patient quality of life. Please consider revising to "Nerve injuries can drastically reduce patients\' quality of life".'
          }
        ]
      },
      {
        id: 'para2',
        heading: 'Paragraph 2',
        original: [
          "Previous studies have suggested that utilizing a nerve conduit as a connector for peripheral nerve repair, covering the repair site and leaving a very short gap between the stumps, provides outcomes that are equivalent to, or better than, direct suture repair. It is generally considered that nerves regenerate along the length of the nerve conduit in a selective manner such that the proximal motor nerves migrate to join the distal motor nerves. The intentional gap in the connector is known to provide an area for selective reinnervation encouraging natural re-growth preventing the aforementioned misalignments."
        ],
        // SIMPLE MARKUP (Now used for 'All Markup' tab)
        simpleMarkup: [
          { text: "Previous studies have suggested that " },
          { text: "using", edits: [{ type: 'suggest', old: 'utilizing', new: 'using' }] },
          { text: " a nerve conduit as a connector " },
          { text: "(covering the repair site and leaving a very short gap between the stumps)", edits: [{ type: 'suggest', old: 'for peripheral nerve repair, covering...', new: '(covering the repair site and leaving a very short gap between the stumps)' }] },
          { text: " for peripheral nerve repair provides outcomes that are equivalent to, or better than, " },
          { text: "those", edits: [{ type: 'suggest', old: 'direct suture repair', new: 'those' }] },
          { text: " of direct suture repair. " },
          { text: "Nerves", edits: [{ type: 'suggest', old: 'It is', new: 'Nerves' }] },
          { text: " generally regenerate along the length of the nerve conduit in a selective manner, " },
          { text: "with", edits: [{ type: 'suggest', old: 'such that the', new: 'with' }] },
          { text: " proximal motor nerves migrating to join "},
          { text: "the", edits: [{ type: 'delete', text: 'the' }] },
          { text: " distal motor nerves. The intentional gap in the connector " },
          { text: "provides", edits: [{ type: 'suggest', old: 'is known to provide', new: 'provides' }] },
          { text: " an area for " },
          { text: "this", edits: [{ type: 'suggest', old: 'selective reinnervation', new: 'this' }] },
          { text: " selective reinnervation, " },
          { text: "thus", edits: [{ type: 'suggest', old: 'encouraging', new: 'thus' }] },
          { text: " encouraging natural regrowth " },
          { text: "while", edits: [{ type: 'suggest', old: 'preventing', new: 'while' }] },
          { text: " preventing " },
          { text: "misalignments", edits: [{ type: 'suggest', old: 'the aforementioned misalignments', new: 'misalignments' }] },
          { text: "." }
        ],
        // ALL MARKUP (Now used for 'Simple Markup' tab)
        allMarkup: [
          { text: "Previous studies have suggested that ", type: 'edited' },
          { text: "using", type: 'addition' },
          { text: " a nerve conduit as a connector ", type: 'edited' },
          { text: "(covering the repair site and leaving a very short gap between the stumps)", type: 'addition' },
          { text: " for peripheral nerve repair provides outcomes that are equivalent to, or better than, ", type: 'edited' },
          { text: "those", type: 'addition' },
          { text: " of direct suture repair. ", type: 'edited' },
          { text: "Nerves", type: 'addition' },
          { text: " generally regenerate along the length of the nerve conduit in a selective manner, ", type: 'edited' },
          { text: "with", type: 'addition' },
          { text: " proximal motor nerves migrating to join distal motor nerves. The intentional gap in the connector ", type: 'edited' },
          { text: "provides", type: 'addition' },
          { text: " an area for ", type: 'edited' },
          { text: "this", type: 'addition' },
          { text: " selective reinnervation, ", type: 'edited' },
          { text: "thus", type: 'addition' },
          { text: " encouraging natural regrowth ", type: 'edited' },
          { text: "while", type: 'addition' },
          { text: " preventing misalignments.", type: 'edited' }
        ],
        comments: []
      },
      {
        id: 'para3',
        heading: 'Paragraph 3',
        original: [
          "The connector also provides a physical barrier to preventing the infiltration of scar tissue, in effect allowing the diffusion of nutrients to the healing repair site. This barrier prevents the any potential uncontrolled sprouting to the outside of the coaptation site, while and its the additional length relocates the sutures away from the coaptation site, thus reducing the risk of tension and tension-induced ischemia around the stumps. The use of a connectors also reduces decreases the number of sutures required for the nerve coaptation, which may reduce surgical time."
        ],
        // SIMPLE MARKUP (Now used for 'All Markup' tab)
        simpleMarkup: [
          { text: "The", edits: [{ type: 'suggest', old: 'The', new: 'The' }] },
          { text: " connector also provides a physical barrier " },
          { text: "to", edits: [{ type: 'suggest', old: 'to preventing', new: 'to' }] },
          { text: " prevent the infiltration of scar tissue, " },
          { text: "allowing", edits: [{ type: 'suggest', old: 'in effect allowing', new: 'allowing' }] },
          { text: " the diffusion of nutrients to the " },
          { text: "repair site", edits: [{ type: 'suggest', old: 'healing repair site', new: 'repair site' }] },
          { text: ". This barrier prevents " },
          { text: "any", edits: [{ type: 'suggest', old: 'the any', new: 'any' }] },
          { text: " potential uncontrolled sprouting " },
          { text: "outside of", edits: [{ type: 'suggest', old: 'to the outside of', new: 'outside of' }] },
          { text: " the coaptation site, " },
          { text: "and its", edits: [{ type: 'suggest', old: 'while and its the additional', new: 'and its' }] },
          { text: " length relocates the sutures away from the coaptation site, " },
          { text: "thus", edits: [{ type: 'suggest', old: 'thus', new: 'thus' }] },
          { text: " reducing the risk of tension and tension-induced ischemia around the stumps. The use of " },
          { text: "a", edits: [{ type: 'suggest', old: 'a connectors', new: 'a' }] },
          { text: " connector also " },
          { text: "decreases", edits: [{ type: 'suggest', old: 'reduces decreases', new: 'decreases' }] },
          { text: " the number of sutures required for " },
          { text: "the", edits: [{ type: 'delete', text: 'the' }] },
          { text: " nerve coaptation, which may reduce surgical time." }
        ],
        // ALL MARKUP (Now used for 'Simple Markup' tab)
        allMarkup: [
          { text: "The", type: 'edited' },
          { text: " connector also provides a physical barrier ", type: 'edited' },
          { text: "to", type: 'addition' },
          { text: " prevent the infiltration of scar tissue, ", type: 'edited' },
          { text: "allowing", type: 'addition' },
          { text: " the diffusion of nutrients to the repair site. This barrier prevents ", type: 'edited' },
          { text: "any", type: 'addition' },
          { text: " potential uncontrolled sprouting ", type: 'edited' },
          { text: "outside of", type: 'addition' },
          { text: " the coaptation site, ", type: 'edited' },
          { text: "and its", type: 'addition' },
          { text: " length relocates the sutures away from the coaptation site, ", type: 'edited' },
          { text: "thus", type: 'addition' },
          { text: " reducing the risk of tension and tension-induced ischemia around the stumps. The use of a connector also ", type: 'edited' },
          { text: "decreases", type: 'addition' },
          { text: " the number of sutures required for nerve coaptation, which may reduce surgical time.", type: 'edited' }
        ],
        comments: [
          {
            type: 'scientific',
            text: 'Consider citing here new research published by Zheng et al. in Theranostics on how combining aligned electrospun nanofibers with decellularized matrix hydrogel supports nerve regeneration through both topological and biochemical guidance.'
          }
        ]
      }
    ]
  }

  // Combine comments and assign a unique index and section ID for tracking
  const allComments: HighlightedComment[] = sampleData.sections.flatMap((s: Section, sectionIndex: number) => s.comments.map((comment: Comment, commentIndex: number) => ({
    ...comment,
    sectionId: `doc-${s.id}`,
    // Create a unique index for the comment across all sections
    commentIndex: `${sectionIndex}-${commentIndex}`,
    // Identify which section this comment is about
    targetSectionId: s.id 
  })))


  // Helper to scroll the document content to the top of a specific section
  const scrollToSection = (sectionId: string, commentIndex: string) => {
    // 1. Set the active comment index for highlighting
    setActiveCommentIndex(commentIndex)

    // 2. Scroll the document pane
    if (contentRef.current) {
      const sectionElement = contentRef.current.querySelector(`#${sectionId}`)
      if (sectionElement instanceof HTMLElement) {
        // Scroll the parent container to the top of the target section element
        contentRef.current.scrollTop = sectionElement.offsetTop - (contentRef.current.offsetTop || 0); // Added safety
      }
    }
  }
  
  // Determine highlight style based on the active comment state
  const getHighlightStyle = (sectionId: string): CSSProperties => {
    if (activeCommentIndex === null) return {}

    // Find the comment using the typed array
    const activeComment = allComments.find((c: HighlightedComment) => c.commentIndex === activeCommentIndex)

    if (activeComment && activeComment.targetSectionId === sectionId.replace('doc-', '')) {
      const color = activeComment.type === 'editorial' ? '#ff8c4240' : '#3b82f640' // Orange or Blue with transparency
      return {
        backgroundColor: color,
        borderLeft: `3px solid ${activeComment.type === 'editorial' ? '#ff6b35' : '#3b82f6'}`,
        paddingLeft: '1.75rem', // Adjust padding due to border
        transition: 'background-color 0.3s ease, border 0.3s ease',
      }
    }
    return {}
  }

  const renderOriginal = () => {
    return sampleData.sections.map((section: Section) => (
      <div 
        id={`doc-${section.id}`} 
        key={section.id} 
        style={{ marginBottom: '2rem', ...getHighlightStyle(`doc-${section.id}`) }}
      >
        <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1.1rem' }}>
          {section.heading}
        </h4>
        {section.original.map((para: string, idx: number) => (
          <p key={idx} style={{ marginBottom: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
            {para}
          </p>
        ))}
      </div>
    ))
  }

  // Renders the 'All Markup' view (Edited text with additions/deletions)
  const renderAllMarkup = () => {
    return sampleData.sections.map((section: Section) => (
      <div 
        id={`doc-${section.id}`} 
        key={section.id} 
        style={{ marginBottom: '2rem', ...getHighlightStyle(`doc-${section.id}`) }}
      >
        <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1.1rem' }}>
          {section.heading}
        </h4>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
          {section.allMarkup.map((part: AllMarkupPart, idx: number) => {
            if (part.type === 'addition') {
              return (
                <span key={idx} style={{
                  backgroundColor: '#e8f5e9', // Light Green
                  color: '#2e7d32', // Dark Green
                  padding: '2px 0',
                  fontWeight: '500'
                }}>
                  {part.text}
                </span>
              )
            } else if (part.type === 'deletion') {
              return (
                <span key={idx} style={{
                  backgroundColor: '#ffe6e6', // Light Red
                  textDecoration: 'line-through',
                  color: '#d32f2f', // Dark Red
                  padding: '2px 0'
                }}>
                  {part.text}
                </span>
              )
            }
            // For 'edited' or unflagged text, show a light blue background for visibility
            return (
              <span key={idx} style={{
                backgroundColor: '#e3f2fd', // Light Blue
                color: '#1565c0', // Dark Blue
                padding: '2px 0'
              }}>
                {part.text}
              </span>
            )
          })}
        </p>
      </div>
    ))
  }

  // Renders the 'Simple Markup' view (Original text with suggested replacements side-by-side)
  const renderSimpleMarkup = () => {
    return sampleData.sections.map((section: Section) => (
      <div 
        id={`doc-${section.id}`} 
        key={section.id} 
        style={{ marginBottom: '2rem', ...getHighlightStyle(`doc-${section.id}`) }}
      >
        <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1.1rem' }}>
          {section.heading}
        </h4>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
          {section.simpleMarkup.map((part: SimpleMarkupPart, idx: number) => {
            if (part.edits) {
              const edit = part.edits[0] // Assuming one edit per part for simplicity
              if (edit.type === 'delete' && edit.text) { // Added type guards
                return (
                  <React.Fragment key={idx}>
                    <span style={{
                      backgroundColor: '#ffe6e6',
                      textDecoration: 'line-through',
                      color: '#d32f2f',
                      padding: '2px 0'
                    }}>
                      {edit.text}
                    </span>
                  </React.Fragment>
                )
              } else if (edit.type === 'suggest' && edit.old && edit.new) { // Added type guards
                return (
                  <React.Fragment key={idx}>
                    <span style={{
                      backgroundColor: '#e3f2fd',
                      color: '#1976d2',
                      padding: '2px 0',
                      textDecoration: 'underline',
                      textDecorationStyle: 'wavy'
                    }}>
                      {edit.old}
                    </span>
                    <span style={{
                      backgroundColor: '#e8f5e9',
                      color: '#2e7d32',
                      padding: '2px 4px',
                      marginLeft: '4px',
                      fontWeight: '500'
                    }}>
                      {edit.new}
                    </span>
                  </React.Fragment>
                )
              }
            }
            return <span key={idx}>{part.text}</span>
          })}
        </p>
      </div>
    ))
  }


  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#f5f7fa' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{
            color: '#5b6a7f',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            fontSize: '0.8rem',
            letterSpacing: '1.5px',
            fontWeight: '600'
          }}>
            Mediterranean Publishing Editing Samples
          </p>
          <h2 style={{
            marginBottom: '0.75rem',
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: '700',
            color: '#1a202c'
          }}>
            This is what better looks like, and how you can get there.
          </h2>
          <p style={{ color: '#5b6a7f', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Check out sample edits as well as editorial and comments in this sample.
          </p>
        </div>

        {/* Tab Navigation (Simple and All Markup swapped here) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#e2e8f0',
            borderRadius: '50px',
            padding: '6px',
            gap: '8px'
          }}>
            <button
              onClick={() => { setActiveTab('original'); setActiveCommentIndex(null); }}
              style={{
                backgroundColor: activeTab === 'original' ? '#fff' : 'transparent',
                border: 'none',
                borderRadius: '50px',
                padding: '12px 32px',
                fontWeight: activeTab === 'original' ? '600' : '400',
                fontSize: '1rem',
                boxShadow: activeTab === 'original' ? '0 2px 12px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                color: '#1a202c'
              }}
            >
              Original
            </button>
            {/* Swapped Tab: Now All Markup (edited text with additions/deletions) */}
            <button
              onClick={() => { setActiveTab('simple'); setActiveCommentIndex(null); }}
              style={{
                backgroundColor: activeTab === 'simple' ? '#fff' : 'transparent',
                border: 'none',
                borderRadius: '50px',
                padding: '12px 32px',
                fontWeight: activeTab === 'simple' ? '600' : '400',
                fontSize: '1rem',
                boxShadow: activeTab === 'simple' ? '0 2px 12px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                color: '#1a202c'
              }}
            >
              Simple Markup
            </button>
            {/* Swapped Tab: Now Simple Markup (suggested replacements) */}
            <button
              onClick={() => { setActiveTab('all'); setActiveCommentIndex(null); }}
              style={{
                backgroundColor: activeTab === 'all' ? '#fff' : 'transparent',
                border: 'none',
                borderRadius: '50px',
                padding: '12px 32px',
                fontWeight: activeTab === 'all' ? '600' : '400',
                fontSize: '1rem',
                boxShadow: activeTab === 'all' ? '0 2px 12px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                color: '#1a202c'
              }}
            >
              All Markup
            </button>
          </div>
        </div>

        {/* Main Content Area with Side Panel */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: activeTab === 'original' ? '1fr' : '1fr 320px',
          gap: '16px',
          alignItems: 'start'
        }}>
          {/* Document Content */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            overflow: 'hidden'
          }}>
            {/* Document Header */}
            <div style={{
              padding: '1.5rem 2rem 1.25rem',
              borderBottom: '2px solid #1a202c'
            }}>
              <span style={{
                backgroundColor: activeTab === 'all' ? '#ff8c42' : '#ff6b35', // Simple Markup = Orange, All Markup = Red-Orange
                color: '#fff',
                padding: '5px 12px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {activeTab === 'all' ? 'Proposed Changes' : 'Sample Edit'} {/* Adjusted label based on swapped content */}
              </span>
              <h3 style={{
                margin: '0',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '600',
                color: '#1a202c',
                lineHeight: '1.4'
              }}>
                {/* Title Markup Logic remains the same (applies to original All Markup data structure) */}
                {activeTab === 'simple' && (
                  <>
                    <span style={{
                      textDecoration: 'line-through',
                      color: '#d32f2f',
                      backgroundColor: '#ffe6e6',
                      padding: '2px 4px',
                      marginRight: '6px'
                    }}>
                      An Analysis of
                    </span>
                    <span style={{
                      color: '#2e7d32',
                      backgroundColor: '#e8f5e9',
                      padding: '2px 4px',
                      fontWeight: '600'
                    }}>
                      using a nerve connector
                    </span>
                  </>
                )}
                {activeTab !== 'simple' && sampleData.title}
              </h3>
            </div>

            {/* Scrollable Content */}
            <div
              ref={contentRef}
              style={{
                padding: '1.5rem 2rem',
                fontSize: '0.95rem',
                color: '#2d3748',
                maxHeight: '500px',
                overflowY: 'auto'
              }}>
              {activeTab === 'original' && renderOriginal()}
              {/* Simple Markup tab now shows All Markup content */}
              {activeTab === 'simple' && renderAllMarkup()}
              {/* All Markup tab now shows Simple Markup content */}
              {activeTab === 'all' && renderSimpleMarkup()}
            </div>
          </div>

          {/* Side Comments Panel */}
          {activeTab !== 'original' && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              position: 'sticky',
              top: '20px',
              maxHeight: '610px',
              overflowY: 'auto',
              paddingRight: '4px'
            }}>
              {allComments.map((comment: HighlightedComment, idx: number) => (
                <div
                  key={idx}
                  onClick={() => scrollToSection(comment.sectionId, comment.commentIndex)} // Pass comment index
                  style={{
                    backgroundColor: activeCommentIndex === comment.commentIndex ? (comment.type === 'editorial' ? '#fff5f2' : '#eff6ff') : '#fff',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    boxShadow: activeCommentIndex === comment.commentIndex ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.08)',
                    border: `2px solid ${comment.type === 'editorial' ? '#ff6b35' : '#3b82f6'}`,
                    cursor: 'pointer', // Indicate clickable
                    transition: 'all 0.2s ease',
                    userSelect: 'none' // Prevent selection
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                  onMouseOut={(e) => {
                    if (activeCommentIndex !== comment.commentIndex) {
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: comment.type === 'editorial' ? '#fff5f2' : '#eff6ff',
                      border: `2px solid ${comment.type === 'editorial' ? '#ff6b35' : '#3b82f6'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      color: comment.type === 'editorial' ? '#ff6b35' : '#3b82f6',
                      marginRight: '12px'
                    }}>
                      {comment.type === 'editorial' ? 'E' : 'S'}
                    </div>
                    <span style={{
                      fontWeight: '600',
                      color: comment.type === 'editorial' ? '#ff6b35' : '#3b82f6',
                      fontSize: '0.95rem',
                      textTransform: 'capitalize'
                    }}>
                      {comment.type}
                    </span>
                  </div>
                  <p style={{
                    margin: '0',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: '#4a5568'
                  }}>
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>
          )}
          {/* ... (The rest of the component is unchanged) ... */}
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: '#5b6a7f', marginBottom: '1rem', fontSize: '1.05rem' }}>
            Want professional editing for your manuscript?
          </p>
          <button style={{
            backgroundColor: '#1a202c',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '14px 48px',
            fontSize: '1.05rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#000'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#1a202c'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
          }}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}