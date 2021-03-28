const aliases = (prefix = `src`) => ({
  '@constants': `${prefix}/constants`,
  '@components': `${prefix}/components`,
  '@pages': `${prefix}/pages`,
  '@helpers': `${prefix}/helpers`,
  '@actions': `${prefix}/actions`
});

module.exports = aliases;