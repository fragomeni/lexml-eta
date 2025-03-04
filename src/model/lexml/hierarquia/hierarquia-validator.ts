import { Dispositivo } from '../../dispositivo/dispositivo';
import { isAgrupadorGenerico, isDispositivoGenerico } from '../../dispositivo/tipo';
import { Mensagem, TipoMensagem } from '../util/mensagem';

export const validaHierarquia = (dispositivo: Dispositivo): Mensagem[] => {
  const mensagens: Mensagem[] = [];
  if (dispositivo === null) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: 'O dispositivo não foi informado',
    });
  }
  if (dispositivo !== null && dispositivo.filhos.length > 0 && dispositivo.tiposPermitidosFilhos!.length === 0) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Segundo a Legislação vigente, ${dispositivo.descricao} não poderia possuir filhos`,
    });
  }
  if (dispositivo !== null && isDispositivoGenerico(dispositivo)) {
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Não foi possível validar a natureza deste dispositivo com base na legislação vigente`,
    });
  }
  if (dispositivo !== null && dispositivo.pai && !isDispositivoGenerico(dispositivo) && !dispositivo.tiposPermitidosPai!.includes(dispositivo.pai.tipo)) {
    mensagens.push({
      tipo: isAgrupadorGenerico(dispositivo.pai) ? TipoMensagem.ERROR : TipoMensagem.WARNING,
      descricao: `Segundo a Legislação vigente, ${dispositivo.descricao} somente poderia pertencer a ${dispositivo.tiposPermitidosPai!.join(', ')}`,
    });
  }
  if (
    dispositivo !== null &&
    !isDispositivoGenerico &&
    dispositivo.filhos.length > 0 &&
    (dispositivo.tiposPermitidosFilhos!.length === 0 || dispositivo.filhos.filter(filho => !dispositivo.tiposPermitidosFilhos!.includes(filho.tipo)).length > 0)
  ) {
    const relacaoFilhos =
      dispositivo.tiposPermitidosFilhos!.length === 0 ? 'não poderia possuir filhos' : `somente poderia possuir ${dispositivo.tiposPermitidosFilhos!.join(', ')}`;
    mensagens.push({
      tipo: TipoMensagem.ERROR,
      descricao: `Segundo a Legislação vigente, ${dispositivo.descricao} ${relacaoFilhos}`,
    });
  }
  return mensagens;
};
