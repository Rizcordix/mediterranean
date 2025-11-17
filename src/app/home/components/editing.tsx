'use client'
import React, { useState, useRef } from 'react'
import { CSSProperties } from 'react'; // Import CSSProperties for style objects
import { Button } from 'react-bootstrap';

// --- 1. Define Core Types ---

type CommentType = 'editorial' | 'developmental';

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
  const [activeCommentIndex, setActiveCommentIndex] = useState<string | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // ===== 1,000+ WORD SAMPLE DATA (DROP-IN) =====
  const sampleData: SampleData = {
    title: "The Last Lighthouse: A Novel (Sample Editing)",
    sections: [
      // --- Opening (expanded) ---
      {
        id: 'opening',
        heading: 'Opening Scene',
        original: [
          "Finn had always liked the sea at dawn. The water at that hour was not the quicksilver of noon nor the heavy glass of evening; it was a patient grey that seemed to hold its breath, listening. The mist wrapped the headland in a shawl, softening the edges of the cliff and making the town beyond look like a memory recalled at the edge of sleep. Gulls moved through the fog in staccato dots and brief, sharp cries—less quarrel than code. Finn walked the shoreline with his hands jammed in his pockets, feeling the sand cool against the soles of his shoes. The hem of his coat was still damp from yesterday’s rain, and a single salt-specked thread hung loose from the cuff, catching the early light like a tiny, stubborn comet.",

          "Behind him, Brinemoor woke in slow, familiar increments: shutters creaked as they were drawn up, a bell in the bakery chimed the hour and a woman’s laugh — brittle, quick — burst through an open window and vanished. The lighthouse, a squat white tower on the point, was just a hint: a pale column shifting in and out of the mist. It stood with the patient authority of something that had long outlived the people who named it, and Finn felt for a moment that its light kept not only ships safe but also the town’s short, private reckonings.",

          "He had come here for a reason he could not at first name — some small calculation of the heart — and for another, larger one he could: to imagine the letter he had never written. For months the words had shifted in his mouth like pebbles; now, with the sea’s low voice around him, they felt possible. He stopped at a rocky outcrop and looked back down the bay. A small fishing boat was turning for harbor, its wake feathering the water into a silver lace. Finn thought of the harbor lights as tiny vows, kept for the night."
        ],
        simpleMarkup: [
          { text: "Finn had always liked the sea at dawn.", edits: [{ type: 'suggest', old: 'liked', new: 'preferred' }] },
          { text: "The water at that hour was not the quicksilver of noon nor the heavy glass of evening; it was a patient grey that seemed to hold its breath, listening.", edits: [{ type: 'suggest', old: 'patient grey', new: 'patient gray that listened' }] },
          { text: "The mist wrapped the headland in a shawl, softening the edges of the cliff and making the town beyond look like a memory recalled at the edge of sleep." },
          { text: "He had come here for a reason he could not at first name — some small calculation of the heart — and for another, larger one he could: to imagine the letter he had never written.", edits: [{ type: 'suggest', old: 'calculation of the heart', new: 'reckoning of the heart' }] },
          { text: "He stopped at a rocky outcrop and looked back down the bay." }
        ],
        allMarkup: [
          { text: "Finn had always preferred the sea at dawn. ", type: 'edited' },
          { text: "The water at that hour was neither the quicksilver of noon nor the heavy glass of evening; it was a patient grey that seemed to hold its breath. ", type: 'edited' },
          { text: "Mist wrapped the headland like a shawl, softening the cliff’s edges and making Brinemoor look like a memory. ", type: 'addition' },
          { text: "He walked the shoreline with his hands in his pockets, feeling the sand cool beneath his shoes. ", type: 'edited' },
          { text: "The lighthouse on the point was a pale column folding into fog; it had kept its vigil longer than many of the town’s names. ", type: 'edited' },
          { text: "He had come to imagine the unsent letter, to give shape to what up until now had been a collection of pebbles in his mouth. ", type: 'addition' }
        ],
        comments: [
          { type: 'editorial', text: 'Tone suggestion: tighten a few phrases early to reduce distance — "had always liked" is wistful but passive; a stronger verb will increase immediacy.' },
          { type: 'developmental', text: 'Narrative suggestion: introduce a small, identifying detail (a scar, a charm, a habit) that anchors Finn in the reader’s mind and pays off later.' }
        ]
      },

      // --- Chapter 1 (expanded) ---
      {
        id: 'chapter1',
        heading: 'Chapter 1 — Meeting Mara',
        original: [
          "Mara turned the key in the jammed lock with a patience that surprised even her. The metal resisted once, then went; the door sighed on its hinges and she stepped into a room that smelled as if memory had been bottled there: lemon oil, old paper, and the smoke of cloves someone had long since let die out. The living room was an inventory of unfinished thoughts — a chair with a blanket folded over its back, a stack of notebooks tied with twine, a pair of glasses perched on a page like a sleeping bird. A lamp, the kind with a soft brass stem and a glass shade, cast a disk of warm light over the nearest table, and in that circle the handwriting of another life spread itself, ink and corrections and small, furious cross-outs." ,

          "She set the kettle on the stove and, as it began to sing, took one of the notebooks in hand. Names and dates lined the page in a cramped, precise hand — lists, notations, the thin architecture of someone cataloguing the world to keep it from falling apart. Mara thought about leaving the town years ago, about a train ticket to an unnamed city and the way the idea had felt then: like possibility. But the ticket had never been formed, and the town’s tides had their own gravity. She sipped her tea and watched the light tilt across the notebooks; the room was small but felt fuller than some larger rooms she had known, because here the objects had story and the stories clung to them like dust." 
        ],
        simpleMarkup: [
          { text: "Mara turned the key in the jammed lock with a patience that surprised even her.", edits: [{ type: 'suggest', old: 'surprised even her', new: 'belied the hurry of her life' }] },
          { text: "The living room smelled of lemon oil and old paper; a lamp cast a warm circle of light over a stack of handwritten notebooks.", edits: [{ type: 'suggest', old: 'a lamp cast a warm circle of light', new: 'the lamp threw a steady, small glow' }] },
          { text: "She set the kettle on the stove and, as it began to sing, took one of the notebooks in hand.", edits: [{ type: 'suggest', old: 'as it began to sing', new: 'when it began to murmur' }] },
          { text: "Names and dates lined the page in a cramped, precise hand — lists, notations, the thin architecture of someone cataloguing the world to keep it from falling apart." }
        ],
        allMarkup: [
          { text: "Mara turned the key in the jammed lock; it gave after a moment, and she entered as if sliding into a familiar ritual. ", type: 'edited' },
          { text: "The living room smelled of lemon oil and old paper; the lamp threw a steady, small glow over a stack of handwritten notebooks. ", type: 'edited' },
          { text: "She filled a kettle and let the water come to a hush; tea smelled of cloves and memory. ", type: 'addition' },
          { text: "On the nearest page, names and dates formed a map of someone’s keeping. ", type: 'edited' }
        ],
        comments: [
          { type: 'editorial', text: 'Line-level: consider streamlining the second sentence — "as if entering a ritual" is strong, but you can shorten surrounding description to maintain pace.' },
          { type: 'developmental', text: 'Character work: what does Mara want in this moment? Even small desires (to be left alone, to be noticed) help make her agency clear.' }
        ]
      },

      // --- Dialogue (expanded) ---
      {
        id: 'dialogue',
        heading: 'Dialogue Example — Subtlety & Pacing',
        original: [
          '"Do you always come here at this hour?" Finn asked, pulling his collar up against the damp. He watched Mara’s profile outlined against the low light.' ,
          '"Only when I need to think," Mara said. "Or when the town is too loud and I need a place it cannot find me in."' ,
          'They sat on the bench where the path met the rocks. For a long moment they listened to waves, which were not so much noise as a kind of neutral witness. Finn, who rarely spoke frankly, found himself saying the sentence he had practiced: "There is something I should have told you months ago."'
        ],
        simpleMarkup: [
          { text: '"Do you always come here at this hour?" Finn asked, pulling his collar up against the damp.' },
          { text: '"Only when I need to think," Mara said. "Or when the town is too loud and I need a place it cannot find me in."', edits: [{ type: 'suggest', old: "and I need a place it cannot find me in", new: "or when I want to be accurate about my own head" }] },
          { text: 'They sat on the bench where the path met the rocks. Finn, who rarely spoke frankly, found himself saying the sentence he had practiced: "There is something I should have told you months ago."', edits: [{ type: 'suggest', old: 'months ago', new: 'for months' }] }
        ],
        allMarkup: [
          { text: '"Do you always come here at this hour?" Finn asked, drawing the collar of his coat. ', type: 'edited' },
          { text: '"Only when I need to think," Mara said. "Or when the town is too loud. "', type: 'edited' },
          { text: ' "Sometimes when I am avoiding making a small, mortal error."', type: 'addition' },
          { text: ' Finn finally said, "There is a letter I never sent."', type: 'edited' }
        ],
        comments: [
          { type: 'developmental', text: 'Dialogue: consider trimming tags. Mara’s voice is drawn by subtext more than explicit explanation; let actions carry part of the meaning.' }
        ]
      },

      // --- New Section: Storm at the Lighthouse (addition) ---
      {
        id: 'storm',
        heading: 'Chapter 2 — Storm at the Lighthouse',
        original: [
          "The storm came with a hardness to it, the sea flinging itself against the rocks as if to prove a point. Finn climbed the narrow iron steps of the lighthouse with his hands on the rail, the wind trying to take the breath from him. Each turn of the stair felt like a small confession; at the top, the glassed lantern room was a cylinder of light and rain, the world reduced to streaks where lightning made quick, skeletal drawings across the water.",

          "He thought of the way people used the sea for metaphors and then behaved as if they could separate themselves from it. Out on the point the keeper’s hut was empty; only the kettle and the weigh-scale remained, small domestic monuments under the howl. Finn took the logbook from the shelf and, with gloves still on, opened to a blank page. The ink ran a little where the moisture found the paper and made the letters heavy; he put down a single entry — his own name, the date, and a line about a letter left unwritten — then closed the book and felt something loosen inside his chest." 
        ],
        simpleMarkup: [
          { text: "The storm came with a hardness to it, the sea flinging itself against the rocks as if to prove a point.", edits: [{ type: 'suggest', old: 'hardness to it', new: 'sudden cruelty' }] },
          { text: "Finn climbed the narrow iron steps of the lighthouse with his hands on the rail, the wind trying to take the breath from him." },
          { text: "He thought of the way people used the sea for metaphors and then behaved as if they could separate themselves from it.", edits: [{ type: 'suggest', old: 'behaved as if they could separate themselves', new: 'acted as if they were strangers to it' }] }
        ],
        allMarkup: [
          { text: "A hard storm struck; waves attacked the rocks with a blunt, animal force. ", type: 'edited' },
          { text: "Finn climbed the iron steps, wind pushing at him like a hand. ", type: 'edited' },
          { text: "He opened the keeper’s log and wrote a single, clumsy line about unsent things. ", type: 'addition' }
        ],
        comments: [
          { type: 'editorial', text: 'Atmosphere is strong here — consider tightening the metaphor in the first sentence so it does not read as mixed ("hardness" + "flinging").' },
          { type: 'developmental', text: 'Scene function: this storm can mark an emotional turning point. Consider using it to force Finn into a decision or to reveal an action that cannot be undone.' }
        ]
      }

    ]
  }

  // Combine comments and assign a unique index and section ID for tracking
  const allComments: HighlightedComment[] = sampleData.sections.flatMap((s: Section, sectionIndex: number) => s.comments.map((comment: Comment, commentIndex: number) => ({
    ...comment,
    sectionId: `doc-${s.id}`,
    commentIndex: `${sectionIndex}-${commentIndex}`,
    targetSectionId: s.id 
  })))

  // Helper to scroll the document content to the top of a specific section
  const scrollToSection = (sectionId: string, commentIndex: string) => {
    setActiveCommentIndex(commentIndex)

    if (contentRef.current) {
      const sectionElement = contentRef.current.querySelector(`#${sectionId}`)
      if (sectionElement instanceof HTMLElement) {
        contentRef.current.scrollTop = sectionElement.offsetTop - (contentRef.current.offsetTop || 0);
      }
    }
  }
  
  const getHighlightStyle = (sectionId: string): CSSProperties => {
    if (activeCommentIndex === null) return {}

    const activeComment = allComments.find((c: HighlightedComment) => c.commentIndex === activeCommentIndex)

    if (activeComment && activeComment.targetSectionId === sectionId.replace('doc-', '')) {
      const color = activeComment.type === 'editorial' ? '#ff8c4240' : '#3b82f640'
      return {
        backgroundColor: color,
        borderLeft: `3px solid ${activeComment.type === 'editorial' ? '#ff6b35' : '#3b82f6'}`,
        paddingLeft: '1.75rem',
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
                  backgroundColor: '#e8f5e9',
                  color: '#2e7d32',
                  padding: '2px 0',
                  fontWeight: '500'
                }}>
                  {part.text}
                </span>
              )
            } else if (part.type === 'deletion') {
              return (
                <span key={idx} style={{
                  backgroundColor: '#ffe6e6',
                  textDecoration: 'line-through',
                  color: '#d32f2f',
                  padding: '2px 0'
                }}>
                  {part.text}
                </span>
              )
            }
            return (
              <span key={idx} style={{
                backgroundColor: '#e3f2fd',
                color: '#1565c0',
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
              const edit = part.edits[0]
              if (edit.type === 'delete' && edit.text) {
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
              } else if (edit.type === 'suggest' && edit.old && edit.new) {
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
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{
            color: '#5b6a7f',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            fontSize: '0.8rem',
            letterSpacing: '1.5px',
            fontWeight: '600'
          }}>
            Mediterranean Publishing — Book Editing Samples
          </p>
          <h2 style={{
            marginBottom: '0.75rem',
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: '700',
            color: '#1a202c'
          }}>
            This is what better looks like for your manuscript.
          </h2>
          <p style={{ color: '#5b6a7f', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            View sample line-level edits, developmental notes, and editorial suggestions for book manuscripts.
          </p>
        </div>

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

        <div style={{
          display: 'grid',
          gridTemplateColumns: activeTab === 'original' ? '1fr' : '1fr 320px',
          gap: '16px',
          alignItems: 'start'
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1.5rem 2rem 1.25rem',
              borderBottom: '2px solid #1a202c'
            }}>
              <span style={{
                backgroundColor: activeTab === 'all' ? '#ff8c42' : '#ff6b35',
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
                {activeTab === 'all' ? 'Proposed Changes' : 'Sample Edit'}
              </span>
              <h3 style={{
                margin: '0',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                fontWeight: '600',
                color: '#1a202c',
                lineHeight: '1.4'
              }}>
                {activeTab === 'simple' && (
                  <>
                    <span style={{
                      textDecoration: 'line-through',
                      color: '#d32f2f',
                      backgroundColor: '#ffe6e6',
                      padding: '2px 4px',
                      marginRight: '6px'
                    }}>
                      The Last Lighthouse: A Draft
                    </span>
                    <span style={{
                      color: '#2e7d32',
                      backgroundColor: '#e8f5e9',
                      padding: '2px 4px',
                      fontWeight: '600'
                    }}>
                      The Last Lighthouse: A Novel (Sample Editing)
                    </span>
                  </>
                )}
                {activeTab !== 'simple' && sampleData.title}
              </h3>
            </div>

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
              {activeTab === 'simple' && renderAllMarkup()}
              {activeTab === 'all' && renderSimpleMarkup()}
            </div>
          </div>

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
                  onClick={() => scrollToSection(comment.sectionId, comment.commentIndex)}
                  style={{
                    backgroundColor: activeCommentIndex === comment.commentIndex ? (comment.type === 'editorial' ? '#fff5f2' : '#eff6ff') : '#fff',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    boxShadow: activeCommentIndex === comment.commentIndex ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.08)',
                    border: `2px solid ${comment.type === 'editorial' ? '#ff6b35' : '#3b82f6'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    userSelect: 'none'
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
                      {comment.type === 'editorial' ? 'E' : 'D'}
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
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: '#5b6a7f', marginBottom: '1rem', fontSize: '1.05rem' }}>
            Want professional editing for your manuscript?
          </p>
          <Button 
            href="/contact"
            style={{
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
          </Button>
        </div>
      </div>
    </section>
  )
}
