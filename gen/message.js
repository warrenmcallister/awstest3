const t = require('./template')
const id = require('./id')
const faker = require('faker')

const templates = [
  t`Man I wish I had a ${'product'}!!!`,
  t`The new ${'product'} looks really cool.`,
  t`Have you seen the ${'product'}?`,
  t`What do you think about the ${'product'}?`,
  t`I'm in love with the new ${'product'}!!`,
  t`I'm curious, would you consider buying a ${'product'} for it's current price?`,
  t`Do you like the ${'product'}?`,
  t`I don't think I'm going to buy the ${'product'}, but I'm definitely considering the next version!`,
  t`I really liked the ${'product'}, I'd give it a 10/10 easily`,
  t`Have you heard of the ${'product'}?`,
  t`I'd really like a sample of the ${'product'}!`,
  t`Not buying a ${'product'} would be wasted money!`,
  t`Going to keep an eye on the ${'product'}...`,
  t`The ${'product'} looks good, but I'm not buying it yet.`,

  t`I really like the color ${'color'}`,
  t`Wish I had more ${'color'} things!`,
  t`I can't get enough of the color ${'color'}!!`,
  t`Can you think of a color better than ${'color'}?`,
  t`Would it make sense to buy more ${'color'} things?`,

  t`The ${'color'} ${'product'} looks really fancy!`,

  t`How do I delete my account?`,
  t`How is everyone doing?`,
  t`Seen the news this weekend?`,
  t`Man I'm really bored :(`,
  t`I'm not interested in any of this nonsense!`,
  t`This place is great!`,
]

const createMessageText = ({ name, color }) => {
  const input = { product: name, color }
  const tpl = faker.random.arrayElement(templates)
  return tpl(input)
}

const createMessage = (user, product) => ({
  id: id(),
  creatorId: user.id,
  text: createMessageText(product)
})

module.exports = createMessage
