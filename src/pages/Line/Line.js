import React from 'react';
import * as echarts from 'echarts';
import * as domToImage from '';


export async function svgToDataURL(svg) {
  return Promise.resolve()
    .then(() => new XMLSerializer().serializeToString(svg))
    .then(encodeURIComponent)
    .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
}

export function createImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.crossOrigin = 'anonymous';
    image.src = url;
  });
}

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.capture = this.capture.bind(this);
    this.dom = React.createRef();
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }


  async capture() {
    let width = this.dom.current.offsetWidth, height = this.dom.current.offsetHeight;

    const xmlns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(xmlns, 'svg');
    const foreignObject = document.createElementNS(xmlns, 'foreignObject');

    svg.setAttributeNS('', 'width', `${width}`);
    svg.setAttributeNS('', 'height', `${height}`);

    foreignObject.setAttributeNS('', 'width', '100%');
    foreignObject.setAttributeNS('', 'height', '100%');
    foreignObject.setAttributeNS('', 'x', '0');
    foreignObject.setAttributeNS('', 'y', '0');
    foreignObject.setAttributeNS('', 'externalResourcesRequired', 'true');

    svg.appendChild(foreignObject);
    foreignObject.appendChild(this.dom.current.lastChild.cloneNode(true));
    console.log(svg);
    let svgUrl = await svgToDataURL(svg);
    let image = await createImage(svgUrl);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const ratio = window.devicePixelRatio;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}`;
    canvas.style.height = `${height}`;

    context.drawImage(image, 0, 0);

    let link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'capture_' + Date.now() + '.png';
    link.click();
    link = null;
  }

  componentDidMount() {
    if (!this.dom.current) return false;
    let chart = echarts.init(this.dom.current);
    chart.setOption(
      {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: [{
          type: 'category'
        }],
        yAxis: [{
          type: 'value'
        }],
        dataset: [{
          source: [
            {
              name: 'A',
              value: 10
            },
            {
              name: 'B',
              value: 30
            },
            {
              name: 'C',
              value: 70
            },
            {
              name: 'D',
              value: 40
            },
            {
              name: 'E',
              value: 80
            },
            {
              name: 'F',
              value: 20
            }
          ]
        }],
        series: [
          {
            type: 'line',
            label: {
              show: true,
              formatter: (param) => {
                return `{${param.name}|${param.data.name}}\n{b|${param.data.value}}`;
              },
              rich: {
                a: {
                  //backgroundColor: '#3e00fb',
                  height: 20
                },
                b: {
                  color: 'red',
                  //backgroundColor: '#dd0e0e',
                  height: 20
                },
                A: {
                  color: 'blue',
                  backgroundColor: 'grey'
                }
              }
            },
            encode: {
              x: 'name',
              y: 'value'
            }
          }
        ]
      }
    );
    setTimeout(() => {
      //this.capture();
      domToImage.toPng(this.dom.current).then((res) => {
        let link = document.createElement('a');
        link.href = res;
        link.download = 'capture_' + Date.now() + '.png';
        link.click();
        link = null;
      });
    }, 3000);
  }

  render() {
    return (
      <div ref={this.dom} style={{
        width: '800px',
        height: '600px',
        border: '1px solid red',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url("https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80")`
      }}>
      </div>
    );
  }
}

export default Line;