/**
 * Every scene takes exactly this. Nothing knows about scroll position — a scene
 * is a pure function of which of four beats it is on.
 *
 *   beat 0 — the "before" state, at rest
 *   beat 1 — the cursor has arrived; ring and tooltip are up
 *   beat 2 — the click fires and the signature animation runs
 *   beat 3 — the settled "after" state, cursor gone
 *
 * Scenes with no cursor (a reveal rather than an action) treat `beat >= 1` as
 * settled, so they read immediately instead of waiting for a click that never
 * comes.
 */
export interface SceneProps {
  beat: number
  reduced: boolean
}
