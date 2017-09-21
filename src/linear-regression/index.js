import * as d3 from 'd3'

let scatter,
  width,
  height,
  radius

let points

export function start (svgElement) {
  scatter = d3.select(svgElement)

  width = +scatter.attr('width')
  height = +scatter.attr('height')
  radius = 16

  points = d3.range(11).map(i => ({
    x: Math.round(Math.random() * (width - radius * 2) + radius),
    y: Math.round(Math.random() * (height - radius * 2) + radius)
  }))

  const colour = d3.scaleOrdinal().range(d3.schemeCategory20)

  scatter.selectAll('circle')
    .data(points)
    .enter().append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', radius)
      .style('fill', (d, i) => colour(i))
      .call(d3.drag()
        .on('start', dragStart)
        .on('drag', dragMove)
        .on('end', dragEnd)
      )
}

function dragStart (d) {
  d3.select(this).raise().classed('active', true)
}

function dragMove (d) {
  d3.select(this)
    .attr('cx', d.x = d3.event.x)
    .attr('cy', d.y = d3.event.y)
}

function dragEnd (d) {
  d3.select(this).classed('active', false)
}
