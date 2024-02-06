type Sample = () => "sample1";

const sample1: Sample = () => {
  console.log("sample2");

  return "sample1";
};

export { sample1 };
export type { Sample };
