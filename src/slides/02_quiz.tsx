import { Alert, Box, Button, Typography } from "@mui/material";
import { type ReactNode, useCallback, useState } from "react";
import Code from "../components/Code";
import { textGradient } from "../components/styles";
import type { SlideProps } from "./types";

type Styles = Record<string, Record<string, string>>;

type Question = {
  scenario: ReactNode;
  question: Styles;
  solution: string;
};

const questions: ReadonlyArray<Question> = [
  {
    scenario: (
      <>
        <div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
        </div>
        <div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
          <Box className="X" sx={{ color: "error.light" }}>
            &lt;div class="X"&gt;
          </Box>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
        </div>
      </>
    ),
    question: {
      "div.a:nth-child(2n+1)": {
        background: "purple",
      },
    },
    solution:
      "Match elements based on the index in the child list of their parents.",
  },
  {
    scenario: (
      <>
        <div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
        </div>
        <div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
          <Box className="X" sx={{ color: "error.light" }}>
            &lt;div class="X"&gt;
          </Box>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
        </div>
      </>
    ),
    question: {
      "div:nth-child(2n+1 of div.a)": {
        background: "purple",
      },
    },
    solution:
      "Match elements based on the index in the child list of their parents.",
  },
  {
    scenario: (
      <>
        <div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="b">&lt;div class="b"&gt;</div>
        </div>
        <div>
          <div className="a">&lt;div class="a"&gt;</div>
          <p className="a">&lt;p class="a"&gt;</p>
        </div>
      </>
    ),
    question: {
      "div.a:only-of-type": {
        background: "purple",
      },
    },
    solution: 'Every div with class "a" that has no div siblings',
  },
  {
    scenario: (
      <>
        <div>
          <div className="a">&lt;div class="a"&gt;</div>
          <div className="b">&lt;div class="b"&gt;</div>
        </div>
        <div>
          <div className="b">&lt;div class="b"&gt;</div>
          <div className="a">&lt;div class="a"&gt;</div>
        </div>
      </>
    ),
    question: {
      ".a ~ .b": {
        background: "purple",
      },
    },
    solution: 'Element of class "b" preceeded by an element of class "a"',
  },
  {
    scenario: (
      <div>
        <div lang="en-US">&lt;div lang="en-US"&gt;</div>
        <div lang="en-GB">&lt;div lang="en-GB"&gt;</div>
        <div lang="de-DE">&lt;div lang="de-DE"&gt;</div>
      </div>
    ),
    question: {
      "div[lang|=en]": {
        background: "purple",
      },
    },
    solution:
      'Everey div where the attribute "lang" contains a hyphen-separated list starting with "en"',
  },
  {
    scenario: (
      <div>
        <div lang="de-DE">&lt;div lang="de-DE"&gt;</div>
        <div lang="de-CH">&lt;div lang="de-CH"&gt;</div>
        <div lang="fr-DE">&lt;div lang="fr-DE"&gt;</div>
        <div lang="fr-CH">&lt;div lang="fr-CH"&gt;</div>
      </div>
    ),
    question: {
      "div[lang$=CH]": {
        background: "purple",
      },
    },
    solution: 'Every div where the attribute "lang" ends with "CH"',
  },
];

export default function Slide({ nextSlide }: SlideProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const nextQuestion = useCallback(() => {
    if (questionIndex >= questions.length - 1) {
      nextSlide();
    } else {
      setShowSolution(false);
      setQuestionIndex((i) => i + 1);
    }
  }, [questionIndex, nextSlide]);

  const question = questions[questionIndex];

  return (
    question && (
      <Box
        sx={{
          display: "flex",
          gap: 8,
          justifyContent: "center",
          alignItems: "center",
          p: 8,
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h2" sx={textGradient("primary")}>
            Selectors
          </Typography>
          <Box sx={{ display: "flex", gap: 8 }}>
            <CSS sx={question.question} />
            <Box
              sx={[
                {
                  display: "flex",
                  gap: 2,
                  "& p": { margin: 0 },
                  "& > div": {
                    backgroundColor: "var(--mui-palette-background-paper)",
                    backgroundImage: "var(--mui-overlays-5)",
                    padding: 2,
                  },
                },
                showSolution && question.question,
              ]}
            >
              {question.scenario}
            </Box>
          </Box>
          <Alert
            severity="success"
            sx={{ visibility: showSolution ? "show" : "hidden" }}
          >
            {question.solution}
          </Alert>
          {showSolution ? (
            <Button onClick={nextQuestion}>Continue</Button>
          ) : (
            <Button onClick={() => setShowSolution(true)}>Show Solution</Button>
          )}
        </Box>
      </Box>
    )
  );
}

function CSS({ sx }: { sx: Styles }) {
  const [key, spec] = Object.entries(sx)[0];
  const values = Object.entries(spec)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");

  return (
    <Code language="css">
      {`
${key} {
${values}
}
`.trim()}
    </Code>
  );
}
