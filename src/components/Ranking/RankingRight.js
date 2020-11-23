import React, { useEffect, useState } from 'react';
import Select from '../../components/Select'
import api from '../../services/api'
import convertDatasetForSelect from '../../utils/convertDatasetForSelect'
import { MdKeyboardArrowDown as ArrowDownIcon } from 'react-icons/md';

import './style.css';

const RankingRight = () => {

    const [games, setGames] = React.useState([]);
    // const [selectedGame, setSelectedGame] = React.useState(null);
    const [selectedGame, setSelectedGame] = useState({ id: 1, name: 'FIFA' }); 

    /* temp */
    const staticUser = { "nome": "Daniel Carvalho" };


    const fetchGames = async () => {
        try {
            const response = await api.get('jogos');
            const data = await response.data;
            const convertedGames = convertDatasetForSelect(data, 'nome', 'id');

            setGames(convertedGames);
        }
        catch (err) {
            throw err;
        }
    };

    useEffect(() => {
        fetchGames();
    }, [])


    /* temp */
    const colocacoes = [
        { "nome_usuario": "Paulo Carvalho", "id_jogo": 1, "posicao": 1 },
        { "nome_usuario": "Daniel Carvalho", "id_jogo": 1, "posicao": 2 },
        { "nome_usuario": "Iris Carvalho", "id_jogo": 1, "posicao": 3 },
        { "nome_usuario": "Paulo Carvalho", "id_jogo": 2, "posicao": 1 },
        { "nome_usuario": "Daniel Carvalho", "id_jogo": 2, "posicao": 2 },
        { "nome_usuario": "Daniel Carvalho", "id_jogo": 3, "posicao": 1 },
        { "nome_usuario": "Paulo Carvalho", "id_jogo": 3, "posicao": 2 },
        { "nome_usuario": "Paulo Carvalho", "id_jogo": 4, "posicao": 1 },
        { "nome_usuario": "Daniel Carvalho", "id_jogo": 4, "posicao": 2 },
        { "nome_usuario": "Daniel Carvalho", "id_jogo": 5, "posicao": 1 },
        { "nome_usuario": "Paulo Carvalho", "id_jogo": 5, "posicao": 2 },
    ];

    /* temp */
    const rankingJogo = colocacoes.filter(ranking => ranking.id_jogo === selectedGame?.id)

    /* temp */
    const rankingJogoPosition = {
        "posicao": rankingJogo.length ? rankingJogo[0].posicao : "",
    };

    return (
        <div className="ranking-area">
            <p>RANKING</p>
            <div className="ranking-items">

                <div className="avatar">
                    <img src="../../../images/avatarpadrao.png" alt="Avatar" />
                </div>

                <span>{staticUser.nome}</span>

                <div className="games-list">
                    <Select options={games} dropdownIcon={ArrowDownIcon} value={{ label: selectedGame?.name || 'selecione o jogo', value: selectedGame?.id || '' }} onChange={e => setSelectedGame({ id: e.value, name: e.label })} />
                </div>

                <div className="ranking-list">

                    {rankingJogoPosition.posicao !== "" &&
                        <p key={rankingJogo} className="posicao-um">
                            <div className="posicoes-ranking-um"><div className="espaco-posicao">{rankingJogo.length ? rankingJogo[0].posicao : ""}º</div> {rankingJogo.length ? rankingJogo[0].nome_usuario : ""}</div>
                        </p>
                    }

                    {rankingJogo.map(ranking => (
                        <p key={ranking}>
                            <div className="posicoes-ranking"><div className="espaco-posicao">{ranking.posicao}º</div> {ranking.nome_usuario}</div>
                        </p>
                    )).slice(1)}

                </div>

            </div>
        </div>
    )
}

export default RankingRight;