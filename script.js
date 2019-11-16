setupSkillLevels = () => {
  const skillLevelContainerArray = document.getElementsByClassName('skill-level');
  const circleSize = 2;
  const circleOffset = (x) => 3 * x + 1;
  const emptyColor = 'var(--light)';
  const filledColor = 'var(--dark)';
  
  const ratingSvg = (level) => {
    let levelSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 ${7*circleSize} ${circleSize}' height='10px' width='70px'>`;
    for(let i = 0; i < 5; i++) {
      levelSvg = levelSvg.concat(`<circle cx='${circleOffset(i)}' cy='1' r='1' fill='${level > i ? filledColor : emptyColor}'/>`)
    }
    return levelSvg.concat("</svg>");
  }
  
  for (let skillLevelContainer of skillLevelContainerArray) {
    skillLevelContainer.innerHTML = ratingSvg(skillLevelContainer.getAttribute('level'));
  };
}

setupSkillLevels();